import LandingHeaderNavs from "./components/LandingHeaderNavs";
import LandingHeaderScrollView from "./components/LandingHeaderScrollView";
import ScrollComponent from "./components/scrollDemo";

export default function Home() {
  return (
    <header className="max-w-7xl mx-auto overflow-hidden">
      <LandingHeaderNavs />
      <LandingHeaderScrollView />
      {/* <ScrollComponent /> */}
    </header>
  );
}
