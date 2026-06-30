import { Metadata } from 'next';
import NotFoundClient from './not-found-client';

export const metadata: Metadata = {
  title: "Page Not Found | 21TechGlory",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Page Not Found | 21TechGlory",
    description: "The page you are looking for does not exist.",
    url: "https://21techglory.com/404",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | 21TechGlory",
    description: "The page you are looking for does not exist.",
  }
};

export default function NotFound() {
  return <NotFoundClient />;
}
