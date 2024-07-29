import FooterInspirations from "./FooterInspirations";

export default function Footer() {
  return (
    <footer className="divide-y bg-palette-faint">
      <div className="py-6 md:py-10 px-2 xs:pl-4 sm:p-6 md:px-10">
        <h3 className="font-semibold text-xl mb-4 text-palette-hof">
          Inspiration for future getaways
        </h3>
        <FooterInspirations />
      </div>
      <div className="py-6 md:py-10"></div>
    </footer>
  );
}
