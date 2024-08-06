import './global.css'

export const metadata = {
  title: "Evergreen",
  description: "Jii's Evergreen Notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
