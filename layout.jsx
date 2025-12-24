export const metadata = {
  title: "Puter API",
  description: "Puter.js API on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://js.puter.com/v2/"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
