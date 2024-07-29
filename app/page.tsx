import Footer from "./components/Footer";
import LandingHeaderNavs from "./components/LandingHeaderNavs";
import LandingHeaderScrollView from "./components/LandingHeaderScrollView";
import ListingsBox from "./components/ListingsBox";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto overflow-clip">
      <LandingHeaderNavs />
      <LandingHeaderScrollView />
      <ListingsBox />
      <Footer />
    </main>
  );
}
