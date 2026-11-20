import "./globals.css";
export const metadata = { title: "SorbornoAI" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F19] text-white antialiased">{children}</body>
    </html>
  );
}
