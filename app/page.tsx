import LandingHeaderNavs from "./components/LandingHeaderNavs";
import LandingHeaderScrollView from "./components/LandingHeaderScrollView";
import ListingsBox from "./components/ListingsBox";

export default function Home() {
  return (
    <header className="max-w-7xl pb-4 mx-auto overflow-clip">
      <LandingHeaderNavs />
      <LandingHeaderScrollView />
      <ListingsBox />
    </header>
  );
}
