export const metadata = {
  title: "Babê Kaius",
  description: "Premium Fitness Dashboard",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  themeColor: "#071739",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#020617",
        }}
      >
        {children}
      </body>
    </html>
  );
}
