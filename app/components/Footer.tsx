import Link from "next/link";
import FooterInspirations from "./FooterInspirations";
import { SlGlobe } from "react-icons/sl";
import { IoLogoFacebook } from "react-icons/io5";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="divide-y divide-palette-deco bg-palette-faint">
      <div className="py-6 md:py-10 px-2 xs:pl-4 sm:p-6 md:px-10">
        <h3 className="font-semibold text-xl mb-3 sm:mb-4 md:mb-6 text-palette-hof">
          Inspiration for future getaways
        </h3>
        <FooterInspirations />
      </div>
      <div className="divide-y divide-palette-deco px-2 xs:pl-4 sm:px-6 md:px-10">
        <ul className="divide-y md:divide-y-0 md:grid md:gap-8 md:grid-cols-3 divide-palette-deco ">
          <li className="py-4 sm:py-6 md:py-8">
            <div className="text-sm text-palette-hof">
              <p className="font-medium mb-3">Support</p>
              <ul className="font-light space-y-4">
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Anti-discrimination
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Disability Support
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-4 sm:py-6 md:py-8">
            <div className="text-sm text-palette-hof">
              <p className="font-medium mb-3">Hosting</p>
              <ul className="font-light space-y-4">
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Anti-discrimination
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Disability Support
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="py-4 sm:py-6 md:py-8">
            <div className="text-sm text-palette-hof">
              <p className="font-medium mb-3">Airbnb</p>
              <ul className="font-light space-y-4">
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    AirCover
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Anti-discrimination
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Disability Support
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Disability Support
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline underline-offset-3" href="/">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="py-4 sm:py-6 grid place-content-center">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-6 md:space-x-8 text-palette-hof text-sm font-medium">
              <div className="flex items-center space-x-3">
                <SlGlobe className="md:space-x-3 sm:text-lg" />
                <p className="x">English (US)</p>
              </div>
              <p className="x">NGN</p>
              <ul className="space-x-2 md:space-x-4 sm:text-lg md:text-xl flex items-center">
                <li>
                  <FaSquareFacebook />
                </li>
                <li>
                  <FaSquareInstagram />
                </li>
                <li>
                  <FaSquareXTwitter />
                </li>
              </ul>
            </div>

            <p className="text-xs text-center">
              &copy; Airbnb {currentYear}, cloned by{" "}
              <Link href="" className="underline">
                Clement Ojiguo
              </Link>{" "}
              for educational purposes only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
