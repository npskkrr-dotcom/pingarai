export const metadata = {
  title: 'Pingarai Shop',
  description: 'ร้านปิ้งย่างสุดปัง',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
