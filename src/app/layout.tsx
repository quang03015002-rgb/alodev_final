import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevStudio — Thiết kế & Phát triển Web",
  description:
    "Studio thiết kế và phát triển phần mềm chuyên nghiệp. Website, App mobile, Hệ thống quản lý doanh nghiệp.",
  keywords: ["thiết kế web", "phát triển app", "lập trình", "NextJS", "React"],
  openGraph: {
    title: "DevStudio — Thiết kế & Phát triển Web",
    description: "Studio thiết kế và phát triển phần mềm chuyên nghiệp.",
    locale: "vi_VN",
    type: "website",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }
    var hour = new Date().getHours();
    var auto = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', auto);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brand)] focus:text-white focus:rounded-lg">
          Bỏ qua điều hướng
        </a>
        {children}
      </body>
    </html>
  );
}
