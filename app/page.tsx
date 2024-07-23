import LandingHeaderNavs from "./components/LandingHeaderNavs";
import LandingHeaderScrollView from "./components/LandingHeaderScrollView";
import ListingsBox from "./components/ListingsBox";

export default function Home() {
  return (
    <header className="max-w-7xl py-4 mx-auto overflow-hidden">
      <LandingHeaderNavs />
      <LandingHeaderScrollView />
      <ListingsBox />
    </header>
  );
}
