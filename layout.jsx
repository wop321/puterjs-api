export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <script src="https://js.puter.com/v2/"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
