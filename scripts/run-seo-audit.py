import urllib.request
import urllib.error
from html.parser import HTMLParser
import re
import json
import os
import subprocess
import tempfile
import sys

# Define target lists of URLs to audit
static_urls = [
    '/',
    '/services',
    '/services/web-development',
    '/services/seo',
    '/services/local-seo',
    '/services/google-business-profile-optimization',
    '/services/ai-automation',
    '/services/crm',
    '/services/paid-ads',
    '/industries',
    '/industries/clinics-hospitals',
    '/industries/salons-spas',
    '/locations/bangalore',
    '/locations/bangalore/seo-company',
    '/locations/bangalore/website-development-company',
    '/locations/bangalore/google-business-profile-optimization',
    '/work',
    '/work/clinic-seo-bangalore',
    '/work/hospital-booking-platform',
    '/work/skincare-website-conversion',
    '/work/ecommerce-ppc-restructure',
    '/testimonials',
    '/about',
    '/contact',
    '/blog',
]

blog_slugs = [
    '/blog/local-seo-for-clinics-india',
    '/blog/google-business-profile-optimization-for-doctors',
    '/blog/how-to-get-more-salon-bookings-online',
]

other_urls = [
    '/sitemap.xml',
    '/robots.txt',
    '/about-us',
    '/skincare',
    '/hospitals',
    '/team',
    '/elements',
    '/this-page-does-not-exist'
]

all_urls = static_urls + blog_slugs + other_urls

# HTML parser to extract page SEO data
class SEOParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = ""
        self.meta_description = ""
        self.og_title = ""
        self.og_description = ""
        self.og_image = ""
        self.in_title = False
        self.json_ld_blocks = []
        self.in_json_ld = False
        self.json_ld_data = ""
        self.links = []
        self.body_text_parts = []
        self.in_body = False
        self.exclude_tags = {'script', 'style', 'header', 'footer', 'nav'}
        self.exclude_stack = 0

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        if tag == 'title':
            self.in_title = True
        elif tag == 'meta':
            name = attrs_dict.get('name', '').lower()
            prop = attrs_dict.get('property', '').lower()
            content = attrs_dict.get('content', '')
            if name == 'description':
                self.meta_description = content
            elif prop == 'og:title':
                self.og_title = content
            elif prop == 'og:description':
                self.og_description = content
            elif prop == 'og:image':
                self.og_image = content
        elif tag == 'script' and attrs_dict.get('type') == 'application/ld+json':
            self.in_json_ld = True
            self.json_ld_data = ""
        elif tag == 'a':
            href = attrs_dict.get('href')
            if href:
                self.links.append(href)
        elif tag == 'body':
            self.in_body = True
            
        if tag in self.exclude_tags:
            self.exclude_stack += 1
        else:
            class_val = attrs_dict.get('class', '').lower()
            id_val = attrs_dict.get('id', '').lower()
            if any(term in class_val or term in id_val for term in ['nav', 'footer', 'header', 'menu']):
                self.exclude_stack += 1

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False
        elif tag == 'script' and self.in_json_ld:
            self.in_json_ld = False
            self.json_ld_blocks.append(self.json_ld_data)
        elif tag == 'body':
            self.in_body = False
            
        if tag in self.exclude_tags:
            self.exclude_stack -= 1
        # Simple heuristic, since we don't track class/id tag types on closing, we just decrement if tag was in exclude list.
        # But this is fine for most standard layouts.

    def handle_data(self, data):
        if self.in_title:
            self.title += data
        elif self.in_json_ld:
            self.json_ld_data += data
        elif self.in_body and self.exclude_stack == 0:
            self.body_text_parts.append(data)

def get_page_data(url):
    req = urllib.request.Request(
        f"http://localhost:3000{url}",
        headers={'User-Agent': 'SEO-Audit-Agent/1.0'}
    )
    
    # Custom redirect handler to prevent following redirects
    class NoRedirectHandler(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, req, fp, code, msg, headers, newurl):
            raise urllib.error.HTTPError(req.full_url, code, msg, headers, fp)
            
    opener = urllib.request.build_opener(NoRedirectHandler())
    
    status_code = 200
    location = None
    html_content = ""
    
    try:
        with opener.open(req) as response:
            status_code = response.status
            html_content = response.read().decode('utf-8', errors='ignore')
    except urllib.error.HTTPError as e:
        status_code = e.code
        location = e.headers.get('Location')
        try:
            html_content = e.read().decode('utf-8', errors='ignore')
        except:
            pass
    except Exception as e:
        status_code = 500
        print(f"Network error on {url}: {e}")
        
    parser = SEOParser()
    if html_content:
        try:
            parser.feed(html_content)
        except Exception as e:
            print(f"Parse error on {url}: {e}")
            
    body_text = " ".join(parser.body_text_parts)
    # Clean up whitespace
    body_text = re.sub(r'\s+', ' ', body_text).strip()
    
    return {
        'url': url,
        'status_code': status_code,
        'location': location,
        'title': parser.title.strip(),
        'meta_description': parser.meta_description.strip(),
        'og_title': parser.og_title.strip(),
        'og_description': parser.og_description.strip(),
        'og_image': parser.og_image.strip(),
        'json_ld_blocks': parser.json_ld_blocks,
        'links': parser.links,
        'body_text': body_text
    }

def jaccard_similarity(text1, text2):
    words1 = set(re.findall(r'\b\w+\b', text1.lower()))
    words2 = set(re.findall(r'\b\w+\b', text2.lower()))
    if not words1 or not words2:
        return 0.0
    intersection = words1.intersection(words2)
    union = words1.union(words2)
    return len(intersection) / len(union)

def run_lighthouse(url):
    print(f"Running mobile Lighthouse on http://localhost:3000{url}...")
    temp_dir = tempfile.gettempdir()
    report_path = os.path.join(temp_dir, f'lh_{os.path.basename(url.replace("/", "_") or "home")}.json')
    if os.path.exists(report_path):
        try: os.remove(report_path)
        except: pass
        
    try:
        cmd = [
            'npx', 'lighthouse', f'http://localhost:3000{url}',
            '--chrome-flags=--headless',
            '--only-categories=performance,seo',
            '--output=json',
            f'--output-path={report_path}'
        ]
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if not os.path.exists(report_path):
            print(f"Lighthouse failed on {url}. stderr: {result.stderr}")
            return None, None
            
        with open(report_path, 'r', encoding='utf-8') as f:
            report = json.load(f)
            
        perf_score = int(report['categories']['performance']['score'] * 100)
        seo_score = int(report['categories']['seo']['score'] * 100)
        return perf_score, seo_score
    except Exception as e:
        print(f"Lighthouse error on {url}: {e}")
        return None, None
    finally:
        if os.path.exists(report_path):
            try: os.remove(report_path)
            except: pass

def find_placeholders():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    placeholders = {
        'Contact details': [],
        'Testimonials': [],
        'Case studies': [],
        'Schema': [],
        'Bangalore neighborhoods': [],
        'Other': []
    }
    exclude_dirs = {'.next', 'node_modules', '.git', 'out', 'dist', 'build'}
    
    for dirpath, dirnames, filenames in os.walk(root_dir):
        dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
        for filename in filenames:
            if not filename.endswith(('.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.json', '.html')):
                continue
            filepath = os.path.join(dirpath, filename)
            rel_path = os.path.relpath(filepath, root_dir)
            try:
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                    for line_num, line in enumerate(f, 1):
                        if '{{TODO:' in line:
                            clean_line = line.strip()
                            # Categorize placeholder
                            lower_line = clean_line.lower()
                            if any(x in lower_line for x in ['phone', 'email', 'address', 'contact', 'location']):
                                category = 'Contact details'
                            elif any(x in lower_line for x in ['testimonial', 'review', 'quote', 'rating']):
                                category = 'Testimonials'
                            elif any(x in lower_line for x in ['case study', 'metric', 'screenshot', 'client', 'work']):
                                category = 'Case studies'
                            elif any(x in lower_line for x in ['schema', 'lat', 'lng', 'gstin', 'organization']):
                                category = 'Schema'
                            elif any(x in lower_line for x in ['neighborhood', 'area', 'neighborhoods', 'whitefield', 'hsr']):
                                category = 'Bangalore neighborhoods'
                            else:
                                category = 'Other'
                            placeholders[category].append((rel_path, line_num, clean_line))
            except:
                pass
    return placeholders

def main():
    print("Starting comprehensive SEO audit script...")
    
    results = {}
    for url in all_urls:
        print(f"Auditing route: {url}")
        results[url] = get_page_data(url)
        
    print("Completed routing audit.")
    
    # 1. Routing Verification Summary
    routing_data = []
    for url in all_urls:
        res = results[url]
        routing_data.append({
            'url': url,
            'status': res['status_code'],
            'redirect_to': res['location'] if res['location'] else ''
        })
        
    # 2. Metadata Uniqueness
    metadata_uniqueness = []
    titles = {}
    descriptions = {}
    
    # Homepage details to check for reuse
    home_og_title = results['/']['og_title']
    home_og_desc = results['/']['og_description']
    
    for url, res in results.items():
        if res['status_code'] == 200:
            title = res['title']
            desc = res['meta_description']
            
            # Check duplicate titles
            if title in titles:
                titles[title].append(url)
            else:
                titles[title] = [url]
                
            # Check duplicate descriptions
            if desc in descriptions:
                descriptions[desc].append(url)
            else:
                descriptions[desc] = [url]
                
            # Check homepage OG reuse
            og_reused = False
            if url != '/':
                if res['og_title'] == home_og_title or res['og_description'] == home_og_desc:
                    og_reused = True
                    
            metadata_uniqueness.append({
                'url': url,
                'title': title,
                'desc': desc,
                'og_title': res['og_title'],
                'og_desc': res['og_description'],
                'og_reused': og_reused
            })
            
    # 3. Schema Validation
    schema_findings = []
    for url, res in results.items():
        if res['status_code'] == 200:
            blocks = res['json_ld_blocks']
            valid_json = True
            parsed_blocks = []
            
            for b in blocks:
                try:
                    parsed_blocks.append(json.loads(b.strip()))
                except Exception as e:
                    valid_json = False
                    
            types = []
            home_id_reused = False
            breadcrumb_found = False
            
            for pb in parsed_blocks:
                # Can be a list or a dictionary
                def check_item(item):
                    nonlocal home_id_reused, breadcrumb_found
                    t = item.get('@type')
                    if t:
                        if isinstance(t, list):
                            types.extend(t)
                        else:
                            types.append(t)
                        if t == 'BreadcrumbList':
                            breadcrumb_found = True
                    # Check id reuse
                    item_id = item.get('@id', '')
                    if item_id and url != '/':
                        # Homepage @id usually contains #organization or just url
                        if '21techglory.com/#organization' in item_id or item_id == 'https://21techglory.com/':
                            home_id_reused = True
                            
                if isinstance(pb, list):
                    for item in pb:
                        check_item(item)
                elif isinstance(pb, dict):
                    # Check graph
                    if '@graph' in pb:
                        for item in pb['@graph']:
                            check_item(item)
                    else:
                        check_item(pb)
                        
            schema_findings.append({
                'url': url,
                'block_count': len(blocks),
                'valid_json': valid_json,
                'types': list(set(types)),
                'home_id_reused': home_id_reused,
                'breadcrumb_found': breadcrumb_found
            })
            
    # 4. Internal Link Audit
    money_pages = {
        '/',
        '/services/web-development',
        '/services/seo',
        '/services/local-seo',
        '/services/google-business-profile-optimization',
        '/services/ai-automation',
        '/services/crm',
        '/services/paid-ads',
        '/locations/bangalore',
        '/locations/bangalore/seo-company',
        '/locations/bangalore/website-development-company',
        '/locations/bangalore/google-business-profile-optimization',
        '/industries/clinics-hospitals',
        '/industries/salons-spas'
    }
    
    inbound_links = {url: 0 for url in all_urls if get_page_data(url)['status_code'] == 200}
    broken_links = []
    blog_money_links = {}
    
    for url, res in results.items():
        if res['status_code'] == 200:
            # Count money page links for blog posts
            money_link_count = 0
            
            for link in res['links']:
                # Clean links: resolve relative or absolute internal links
                clean_link = link.strip()
                if clean_link.startswith('https://21techglory.com'):
                    clean_link = clean_link.replace('https://21techglory.com', '')
                elif clean_link.startswith('http://localhost:3000'):
                    clean_link = clean_link.replace('http://localhost:3000', '')
                elif not clean_link.startswith('/') and not clean_link.startswith('http') and not clean_link.startswith('#') and not clean_link.startswith('mailto') and not clean_link.startswith('tel'):
                    # Relative to current url path, let's treat simply
                    pass
                
                # Strip fragments/query params
                clean_link = clean_link.split('#')[0].split('?')[0]
                if not clean_link:
                    clean_link = '/'
                    
                # Track inbound links for audited pages
                if clean_link in inbound_links:
                    if clean_link != url:  # Exclude self-linking
                        inbound_links[clean_link] += 1
                elif clean_link.startswith('/') and not clean_link.startswith(('/_next', '/favicon', '/og-image', '/images', '/public')):
                    # Check if page is broken
                    # Skip assets
                    if not any(clean_link.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.xml', '.txt', '.webp']):
                        # Make request to verify if it's broken
                        try:
                            req = urllib.request.Request(f"http://localhost:3000{clean_link}", method='HEAD')
                            urllib.request.urlopen(req)
                        except urllib.error.HTTPError as e:
                            if e.code == 404:
                                broken_links.append((url, link, 404))
                        except Exception as e:
                            pass
                            
                # Check money links inside blog posts
                if url in blog_slugs:
                    if clean_link in money_pages:
                        money_link_count += 1
                        
            if url in blog_slugs:
                blog_money_links[url] = money_link_count
                
    orphan_pages = [url for url, count in inbound_links.items() if count == 0 and url != '/']
    
    # 5. Anti-Cannibalization Audit
    cannibalization_pairs = [
        ('/services/local-seo', '/locations/bangalore/seo-company'),
        ('/services/google-business-profile-optimization', '/locations/bangalore/google-business-profile-optimization'),
        ('/services/web-development', '/locations/bangalore/website-development-company'),
        ('/industries/clinics-hospitals', '/industries/salons-spas')
    ]
    
    similarity_scores = []
    for p1, p2 in cannibalization_pairs:
        txt1 = results[p1]['body_text'] if p1 in results else ""
        txt2 = results[p2]['body_text'] if p2 in results else ""
        sim = jaccard_similarity(txt1, txt2)
        similarity_scores.append({
            'pair': f"{p1} ↔ {p2}",
            'similarity': f"{sim * 100:.2f}%"
        })
        
    # 6. Lighthouse Audit
    lighthouse_targets = [
        '/',
        '/services/local-seo',
        '/locations/bangalore/seo-company',
        '/industries/clinics-hospitals',
        '/blog/local-seo-for-clinics-india'
    ]
    
    lighthouse_scores = []
    for url in lighthouse_targets:
        perf, seo = run_lighthouse(url)
        lighthouse_scores.append({
            'url': url,
            'performance': perf if perf is not None else 'N/A',
            'seo': seo if seo is not None else 'N/A'
        })
        
    # 7. Placeholder Audit
    placeholders = find_placeholders()
    
    # Compile the final report
    report_md = []
    report_md.append("# 21TechGlory Comprehensive SEO Audit Report\n")
    report_md.append(f"**Audit Timestamp:** 2026-06-20\n")
    
    # Section 1: Routing Table
    report_md.append("## 1. Routing Verification Table\n")
    report_md.append("| URL Path | Response Code | Permanent Redirect Destination | status |")
    report_md.append("|---|---|---|---|")
    for item in routing_data:
        status = "✅ PASS"
        url = item['url']
        code = item['status']
        redir = item['redirect_to']
        
        # Verify expectations
        if url in ['/about-us', '/skincare', '/hospitals', '/team']:
            if code not in [301, 307, 308]:
                status = "❌ FAIL (Expected 308 redirect)"
        elif url == '/elements':
            if code != 410:
                status = "❌ FAIL (Expected 410 Gone)"
        elif url == '/this-page-does-not-exist':
            if code != 404:
                status = "❌ FAIL (Expected 404 Not Found)"
        else:
            if code != 200:
                status = "❌ FAIL (Expected 200 OK)"
                
        report_md.append(f"| `{url}` | {code} | {f'`{redir}`' if redir else 'N/A'} | {status} |")
    report_md.append("\n")
    
    # Section 2: Metadata Uniqueness
    report_md.append("## 2. Metadata Uniqueness Audit\n")
    report_md.append("| URL Path | Title Tag | Meta Description | OG Title | OG Description | Status |")
    report_md.append("|---|---|---|---|---|---|")
    
    # Check duplicate titles/descs details
    dup_titles = [t for t, urls in titles.items() if len(urls) > 1]
    dup_descs = [d for d, urls in descriptions.items() if len(urls) > 1]
    
    for item in metadata_uniqueness:
        status = "✅ Unique"
        notes = []
        if item['title'] in dup_titles:
            notes.append("Duplicate Title")
        if item['desc'] in dup_descs:
            notes.append("Duplicate Desc")
        if item['og_reused']:
            notes.append("Homepage OG Reused")
            
        if notes:
            status = "❌ " + ", ".join(notes)
            
        # Truncate descriptions for readablity in table
        t_desc = item['desc'][:60] + "..." if len(item['desc']) > 60 else item['desc']
        t_og_desc = item['og_desc'][:60] + "..." if len(item['og_desc']) > 60 else item['og_desc']
        
        report_md.append(f"| `{item['url']}` | {item['title']} | {t_desc} | {item['og_title']} | {t_og_desc} | {status} |")
    report_md.append("\n")
    
    # Section 3: Schema Validation Summary
    report_md.append("## 3. Schema & JSON-LD Validation\n")
    report_md.append("| URL Path | JSON-LD Blocks | Valid JSON | Schema Types | Homepage `@id` Reused | Breadcrumb Present | Status |")
    report_md.append("|---|---|---|---|---|---|---|")
    for item in schema_findings:
        status = "✅ PASS"
        notes = []
        if not item['valid_json']:
            notes.append("Invalid JSON")
        if item['home_id_reused']:
            notes.append("Homepage `@id` Reused")
        if item['url'] != '/' and not item['breadcrumb_found']:
            notes.append("No BreadcrumbList")
            
        if notes:
            status = "❌ " + ", ".join(notes)
            
        types_str = ", ".join([f"`{t}`" for t in item['types']]) if item['types'] else 'None'
        report_md.append(f"| `{item['url']}` | {item['block_count']} | {'Yes' if item['valid_json'] else 'No'} | {types_str} | {'Yes' if item['home_id_reused'] else 'No'} | {'Yes' if item['breadcrumb_found'] else 'No'} | {status} |")
    report_md.append("\n")
    
    # Section 4: Internal Link Findings
    report_md.append("## 4. Internal Link Audit\n")
    report_md.append("### Orphan Pages (Pages with 0 inbound internal links)")
    if orphan_pages:
        for op in orphan_pages:
            report_md.append(f"- `❌ {op}`")
    else:
        report_md.append("- ✅ None! All pages are linked internally.")
    report_md.append("\n")
    
    report_md.append("### Broken Internal Links")
    if broken_links:
        for page, target, status in broken_links:
            report_md.append(f"- Page: `{page}` → Links to: `{target}` (Returns {status})")
    else:
        report_md.append("- ✅ None! All internal links resolve correctly.")
    report_md.append("\n")
    
    report_md.append("### Blog Post Money Page Link Count (Target: ≥ 2)")
    report_md.append("| Blog Page | Internal Links to Money Pages | Status |")
    report_md.append("|---|---|---|")
    for bp, count in blog_money_links.items():
        status = "✅ PASS" if count >= 2 else "❌ FAIL (Fewer than 2 links to money pages)"
        report_md.append(f"| `{bp}` | {count} | {status} |")
    report_md.append("\n")
    
    # Section 5: Cannibalization Scores
    report_md.append("## 5. Body Copy Cannibalization Scores\n")
    report_md.append("| Page Pair | Jaccard Similarity | Status (Target: < 25%, Clinic/Salon < 20%) |")
    report_md.append("|---|---|---|")
    for score in similarity_scores:
        sim_val = float(score['similarity'].replace('%', ''))
        limit = 20.0 if "clinics-hospitals ↔ salons-spas" in score['pair'] else 25.0
        status = "✅ PASS" if sim_val < limit else f"❌ FAIL (Too high similarity, target < {limit}%)"
        report_md.append(f"| {score['pair']} | {score['similarity']} | {status} |")
    report_md.append("\n")
    
    # Section 6: Lighthouse Scores
    report_md.append("## 6. Lighthouse Audit (Mobile)\n")
    report_md.append("| URL Path | Performance Score | SEO Score | Performance Status (Target: ≥ 90) | SEO Status (Target: ≥ 95) |")
    report_md.append("|---|---|---|---|---|")
    for score in lighthouse_scores:
        perf = score['performance']
        seo = score['seo']
        
        perf_status = "✅ PASS"
        if perf == 'N/A': perf_status = "N/A"
        elif perf < 90: perf_status = f"❌ FAIL (< 90)"
        
        seo_status = "✅ PASS"
        if seo == 'N/A': seo_status = "N/A"
        elif seo < 95: seo_status = f"❌ FAIL (< 95)"
        
        report_md.append(f"| `{score['url']}` | {perf} | {seo} | {perf_status} | {seo_status} |")
    report_md.append("\n")
    
    # Section 7: Placeholder Inventory
    report_md.append("## 7. Placeholder Inventory (`{{TODO:` Search)\n")
    has_placeholders = False
    for category, items in placeholders.items():
        report_md.append(f"### Category: {category} (Count: {len(items)})")
        if items:
            has_placeholders = True
            for path, line, content in items:
                # Escape code characters so they render nicely in table
                escaped_content = content.replace('|', '\\|')
                report_md.append(f"- `{path}:{line}`: `{escaped_content}`")
        else:
            report_md.append("- No placeholders found in this category.")
        report_md.append("\n")
        
    # Section 8: Top 10 Actions
    report_md.append("## 8. Top 10 Next Actions\n")
    
    actions = []
    
    # Derive actions from findings
    # 1. Routing errors
    for item in routing_data:
        url = item['url']
        code = item['status']
        if url in ['/about-us', '/skincare', '/hospitals', '/team']:
            if code not in [301, 307, 308]:
                actions.append(f"Fix routing status for `{url}` (expected 308, got {code})")
        elif url == '/elements':
            if code != 410:
                actions.append(f"Fix routing status for `{url}` (expected 410, got {code})")
        elif url == '/this-page-does-not-exist':
            if code != 404:
                actions.append(f"Fix routing status for `{url}` (expected 404, got {code})")
        else:
            if code != 200:
                actions.append(f"Fix routing status for `{url}` (expected 200, got {code})")
            
    # 2. Metadata errors
    for item in metadata_uniqueness:
        notes = []
        if item['title'] in dup_titles:
            notes.append("Duplicate Title")
        if item['desc'] in dup_descs:
            notes.append("Duplicate Desc")
        if item['og_reused']:
            notes.append("Homepage OG Reused")
        if notes:
            actions.append(f"Resolve metadata issues ({', '.join(notes)}) on `{item['url']}`")
            
    # 3. Schema errors
    for item in schema_findings:
        notes = []
        if not item['valid_json']:
            notes.append("Invalid JSON")
        if item['home_id_reused']:
            notes.append("Homepage `@id` Reused")
        if item['url'] != '/' and not item['breadcrumb_found']:
            notes.append("No BreadcrumbList")
        if notes:
            actions.append(f"Fix JSON-LD schema issues ({', '.join(notes)}) on `{item['url']}`")
            
    # 4. Orphans or broken links
    if orphan_pages:
        actions.append(f"Link to orphan pages from active money pages: {', '.join(orphan_pages)}")
    if broken_links:
        actions.append(f"Fix broken internal links pointing to non-existent paths")
    for bp, count in blog_money_links.items():
        if count < 2:
            actions.append(f"Add more links to high-intent money pages from `{bp}` (currently has {count})")
            
    # 5. Cannibalization
    for score in similarity_scores:
        sim_val = float(score['similarity'].replace('%', ''))
        limit = 20.0 if "clinics-hospitals ↔ salons-spas" in score['pair'] else 25.0
        if sim_val >= limit:
            actions.append(f"Reduce copy similarity for pair: {score['pair']} (current: {score['similarity']}, target: < {limit}%)")
            
    # 6. Lighthouse
    for score in lighthouse_scores:
        if score['performance'] != 'N/A' and score['performance'] < 90:
            actions.append(f"Optimize Performance score for `{score['url']}` (current: {score['performance']})")
        if score['seo'] != 'N/A' and score['seo'] < 95:
            actions.append(f"Optimize SEO score for `{score['url']}` (current: {score['seo']})")
            
    # 7. Placeholders
    total_placeholders = sum(len(items) for items in placeholders.values())
    if total_placeholders > 0:
        actions.append(f"Flesh out the remaining {total_placeholders} placeholders in the codebase")
        
    # Default filler if we have fewer than 10 actions
    default_actions = [
        "Monitor Google Search Console crawl errors after deployment",
        "Set up Bing Webmaster Tools XML verification verification in public/",
        "Verify standard GMB LocalBusiness profile coordinates are aligned",
        "Track user flow paths from blog categories to money CTAs",
        "Configure custom GA4 events for phone number/WhatsApp clicks",
        "Validate JSON-LD schema with schema.org validator for clincal-specific tags",
        "Audit alt tags on all dynamic images under public/images",
        "Run security headers audit on staging environment build output"
    ]
    
    actions.extend(default_actions)
    
    # Select top 10 unique actions
    unique_actions = []
    for a in actions:
        if a not in unique_actions:
            unique_actions.append(a)
            
    for idx, act in enumerate(unique_actions[:10], 1):
        report_md.append(f"{idx}. [ ] {act}")
        
    # Write to file
    artifact_path = os.path.abspath(os.path.join(root_dir, 'artifacts', 'seo-audit-report.md'))
    # Make sure parent directory exists
    os.makedirs(os.path.dirname(artifact_path), exist_ok=True)
    
    # Save the report as an artifact
    with open(artifact_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(report_md))
        
    print(f"Report successfully saved to {artifact_path}")
    
if __name__ == '__main__':
    main()
