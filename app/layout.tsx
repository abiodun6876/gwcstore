import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gwcstore.netlify.app'), // Add this line
  title: 'GCW Store - Authentic African Products',
  description: 'We\'re proud to serve both the African community and those who appreciate authentic cultural products, offering carefully curated pastries, clothing, and foods that remind our customers of home.',
  openGraph: {
    title: 'GCW Store - Authentic African Products',
    description: 'We\'re proud to serve both the African community and those who appreciate authentic cultural products, offering carefully curated pastries, clothing, and foods that remind our customers of home.',
    url: 'https://gwcstore.netlify.app',
    images: [
      {
        url: '/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'GCW Store - Authentic African Products',
      },
    ],
    siteName: 'GCW Store',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GCW Store - Authentic African Products',
    description: 'We\'re proud to serve both the African community and those who appreciate authentic cultural products, offering carefully curated pastries, clothing, and foods that remind our customers of home.',
    images: ['/img/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
