import Navbar from './Navbar';
import Footer from './Footer';
import { AboutSection } from './About';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  showAbout?: boolean;
}

const Layout = ({ children, showAbout = true }: LayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col mx-auto bg-background text-foreground'>
      <Navbar />
      <main className='flex-1'>{children}</main>
      {showAbout && <AboutSection />}
      <Footer />
    </div>
  );
};

export default Layout;
