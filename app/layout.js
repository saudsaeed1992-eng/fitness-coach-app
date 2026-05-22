export const metadata = {
  title: "Fitness Coach App",
  description: "Fitness app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
