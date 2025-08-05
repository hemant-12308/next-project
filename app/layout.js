import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Blog App",
    default: "Blog App",
  },
  description: "Hello World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
