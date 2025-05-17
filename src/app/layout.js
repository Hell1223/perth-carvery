// src/app/layout.js
import '../app/globals.css'
import Footer from '../components/Footer'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Perth Carvery | The Tasty House',
  description: 'Fast Food Restaurant in Stirling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 text-black w-full">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
