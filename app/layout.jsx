export const metadata = {
  title: "Puter API",
  description: "Puter.js API on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
