import React, { useState } from "react";
import LOGO from "./asstes/logo.png";
import Footer_image from "./asstes/footer.png";
import Facebook from "./asstes/facebook.png";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  let _toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <>
    <div
      className="flex flex-row  justify-between px-8 pt-6 pb-4 "
      style={{ backgroundColor: "#8c8c8c" }}
    >
      <div className="lg:flex md:flex sm:flex  flex-row ">
        <img src={LOGO} width="100" height="100" className="object-contain" />{" "}
        <span className="text-xs text-white text-left mt-4">jobs</span>
      </div>

      <ul className="lg:flex md:flex flex-row  px-4 hidden ">
        <li className="mx-2 text-white hover:text-black ">
          <a href="http://alitkan.com/index.php">HOME</a>
        </li>

        <li className="mx-2  text-white hover:text-black">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            {" "}
            SERVICE <i className="fa fa-angle-down"></i>
          </a>
        </li>
        <li className="mx-2 text-white text-bold hover:text-black">
          <a href="http://alitkan.com/projects.php">PROJECTS</a>
        </li>
        <li className="mx-2 text-white text-bold  hover:text-black">
          <a href="http://alitkan.com/index.php#news">NEWS</a>
        </li>

        <li className="mx-2 text-white text-bold  hover:text-black">
          <a href="http://alitkan.com/about.php">ABOUT</a>
        </li>
        <li className="mx-2 text-white text-bold  hover:text-black">
          <a href="http://alitkan.com/contact.php">CONTACT US </a>
        </li>
      </ul>

      {/* <div className="lg:hidden md:hidden sm:flex flex-col my-4   "> */}
        <div class="sm:absolute inset-y-0 left-0 flex items-center lg:hidden md:hidden">
          <button
            class="inline-flex items-center justify-center py-1 px-4 rounded text-gray-300 bg-transparent  hover:bg-white focus:outline-none focus:bg-white focus:text-gray-500  hover:text-gray-500 transition duration-150 ease-in-out"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={_toggleNav}
          >
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    {/* </div> */}

    {isOpen ? (
      <>
                 <div className="mt-1 bg-gray-100"/>
          <div className="flex flex-col mx-auto bg-orange-500 w-3/4  rounded sm:absolute  items-start lg:hidden md:hidden">
            <ul className="px-4 pt-0 pb-4">
              <li className="mx-2 text-white hover:text-black mt-2">
                <a href="http://alitkan.com/index.php">HOME</a>
              </li>

              <li className="mx-2  text-white hover:text-black mt-2">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  SERVICE <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <li className="mx-2 text-white text-bold hover:text-black mt-2">
                <a href="http://alitkan.com/projects.php">PROJECTS</a>
              </li>
              <li className="mx-2 text-white text-bold  hover:text-black mt-2">
                <a href="http://alitkan.com/index.php#news">NEWS</a>
              </li>

              <li className="mx-2 text-white text-bold  hover:text-black mt-2">
                <a href="http://alitkan.com/about.php">ABOUT</a>
              </li>
              <li className="mx-2 text-white text-bold  hover:text-black mt-2">
                <a href="http://alitkan.com/contact.php">CONTACT US </a>
              </li>
            </ul>
          </div>
          </>
        ) : null}
    </>
  );
}

export const Footer = () => {
  return (
    <div
      className="flex flex-col flex-wrap  h-64 w-full object-fill"
      style={{
        backgroundImage: `url(${Footer_image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <ul className="flex  flex-row  flex-wrap  justify-center my-20">
        <li>
          <a
            className="font-bold text-white mx-4 lg:text-2xl md:text-2xl sm:text-sm"
            href="http://alitkan.com/index.php"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="font-bold text-white  mx-4 lg:text-2xl md:text-2xl sm:text-sm"
            href="http://alitkan.com/about.php"
          >
            ABOUT US{" "}
          </a>
        </li>
        <li>
          {" "}
          <a
            className="font-bold text-white  mx-4 lg:text-xl md:text-xl sm:text-sm"
            href="http://alitkan.com/contact.php"
          >
            CONTACT US
          </a>
        </li>

        <li>
          <a target="_blank" href="https://www.facebook.com/alitkan.iq/">
            <img
              src={Facebook}
              alt="facebook"
              className="h-12 w-12 ml-8 lg:mt-0 md:mt-0 sm:mt-4 "
              style={{ marginTop: "-11px" }}
            />
          </a>
        </li>
      </ul>

      {/* <hr className="h-2 color-black"/> */}

      <div className="flex flex-row justify-start ml-4 lg:text-xl md:text-xl sm:text-sm">
        <h5 className="font-bold text-white ">
          {" "}
          Copyright{" "}
          <a
            href="http://alitkan.com/index.php"
            style={{ color: "#e65c00", fontWeight: "bold" }}
          >
            ALITKAN
          </a>{" "}
          2019{" "}
        </h5>
      </div>
    </div>
  );
};
