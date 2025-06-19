import Navbar from "./Navbar";
import Footer from "./Footer";
import { AboutSection } from "./About";
import type { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto bg-background text-foreground">
      <Navbar />
       <main className="flex-1">
        {children}
       </main>
       <AboutSection />
      <Footer />
    </div>
  );
};

export default Layout;
