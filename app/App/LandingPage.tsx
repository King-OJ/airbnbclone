"use client";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LandingHeaderNavs from "../components/LandingHeaderNavs";
import LandingHeaderScrollView from "../components/LandingHeaderScrollView";
import ListingsBox from "../components/ListingsBox";

export default function LandingPage() {
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setPageScroll(window.scrollY);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        setPageScroll(0);
      });
  }, []);

  return (
    <main className="max-w-7xl mx-auto overflow-clip">
      <div className="sticky top-0 z-10 bg-white">
        <LandingHeaderNavs pageScroll={pageScroll} />
        <LandingHeaderScrollView />
      </div>
      <ListingsBox />
      <Footer />
    </main>
  );
}
