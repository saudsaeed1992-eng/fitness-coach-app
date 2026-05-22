import "./globals.css";

export const metadata = {
  title: "Fat Loss Coach",
  description: "Mobile-first fitness coaching dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
