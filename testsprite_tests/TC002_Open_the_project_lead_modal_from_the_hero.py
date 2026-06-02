import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        pw = await async_api.async_playwright().start()
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )
        context = await browser.new_context()
        context.set_default_timeout(15000)
        page = await context.new_page()
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> click
        # button "CLICK TO ENTER THE 21TECHGLORY WORLD"
        elem = page.locator("xpath=/html/body/main/div[1]/div[2]/button").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Click the hero 'Let's Talk' CTA (interactive element [83]) to open the project inquiry modal and then verify the modal and form appear.
        # link "Let's Talk"
        elem = page.locator("xpath=/html/body/main/nav/div/div[2]/a").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Switch to the original site tab (DF8B) and verify whether the project inquiry modal and form are displayed.
        # Switch to tab DF8B
        page = context.pages[-1]  # switch to most recently active tab
        
        # -> Click the hero 'Let's Talk' element [83] in the original site tab to verify whether the project inquiry modal appears or an external WhatsApp tab opens.
        # link "Let's Talk"
        elem = page.locator("xpath=/html/body/main/nav/div/div[2]/a").nth(0)
        await elem.wait_for(state="visible", timeout=10000)
        await elem.click()
        
        # -> Switch to the original site tab DF8B and wait for the page to load so the modal and form can be checked.
        # Switch to tab DF8B
        page = context.pages[-1]  # switch to most recently active tab
        
        # --> Test failed (AST guard fallback)
        raise AssertionError("Test failed during agent run: " + "TEST FAILURE The hero 'Let's Talk' CTA does not open an in-site project inquiry modal; it opens an external WhatsApp link instead, so the lead capture modal cannot be reached from the hero area. Observations: - Clicking the hero 'Let's Talk' CTA (element [83]) opened an external WhatsApp tab twice (tabs 9AD6 and A821). - No in-site modal or project inquiry form appeared on the original site tab...")
        await asyncio.sleep(5)
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    