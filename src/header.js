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
      className="flex flex-row  justify-between px-8 pt-6  pb-4 fixed"
      style={{ backgroundColor: "#8c8c8c",top:0,width:'100%' }}
    >
      <div className="flex  flex-row ">
        {/* <img src={LOGO} width="100" height="100" className="object-contain" />{" "} */}
        <p ><a href="http://alitkan.com/index.php" className="italic text-2xl text-white font-serif">ALITKAN</a></p>
        <span className="text-xs text-white text-left mt-4">Job Portal</span>
      </div>

      <ul className="lg:flex md:flex flex-row  px-4 hidden mt-1">
        <li className="mx-2 text-white hover:text-black  transition ease-linear duration-500  ">
          <a href="http://alitkan.com/index.php">HOME</a>
        </li>

        <li className="mx-2  text-white hover:text-black  transition ease-linear duration-500 ">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            {" "}
            SERVICE <i className="fa fa-angle-down"></i>
          </a>
        </li>
        <li className="mx-2 text-white text-bold hover:text-black transition ease-linear duration-500 ">
          <a href="http://alitkan.com/projects.php">PROJECTS</a>
        </li>
        <li className="mx-2 text-white text-bold  hover:text-black  transition ease-linear duration-500 ">
          <a href="http://alitkan.com/index.php#news">NEWS</a>
        </li>

        <li className="mx-2 text-white text-bold  hover:text-black  transition ease-linear duration-500 ">
          <a href="http://alitkan.com/about.php">ABOUT</a>
        </li>
        <li className="mx-2 text-white text-bold  hover:text-black  transition ease-linear duration-500 ">
          <a href="http://alitkan.com/contact.php">CONTACT US </a>
        </li>
      </ul>

      {/* <div className="lg:hidden md:hidden sm:flex flex-col my-4   "> */}
        <div className="sm:absolute inset-y-0 left-0 flex items-center lg:hidden md:hidden">
          <button
            className="inline-flex items-center justify-center py-1 px-4 rounded text-gray-300 bg-transparent  hover:bg-white focus:outline-none focus:bg-white focus:text-gray-500  hover:text-gray-500 transition duration-200 ease-linear"
            aria-label="Main menu"
            aria-expanded="false"
            onClick={_toggleNav}
          >
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    {/* </div> */}

    {isOpen ? (
      <>
                 <div className="mt-20 bg-gray-100"/>
          <div className="flex mt-10 flex-col mx-auto bg-orange-500 w-3/4  rounded sm:absolute  items-start lg:hidden md:hidden">
            <ul className="px-4 pt-0 pb-4">
              <li className="mx-2 text-white hover:text-black mt-2  transition ease-linear duration-500 ">
                <a href="http://alitkan.com/index.php">HOME</a>
              </li>

              <li className="mx-2  text-white hover:text-black mt-2  transition ease-linear duration-500 ">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  {" "}
                  SERVICE <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <li className="mx-2 text-white text-bold hover:text-black mt-2  transition ease-linear duration-500 ">
                <a href="http://alitkan.com/projects.php">PROJECTS</a>
              </li>
              <li className="mx-2 text-white text-bold  hover:text-black mt-2  transition ease-linear duration-500 ">
                <a href="http://alitkan.com/index.php#news">NEWS</a>
              </li>

              <li className="mx-2 text-white text-bold  hover:text-black mt-2  transition ease-linear duration-500 ">
                <a href="http://alitkan.com/about.php">ABOUT</a>
              </li>
              <li className="mx-2 text-white text-bold  hover:text-black mt-2  transition ease-linear duration-500 ">
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
      <ul className="inline-flex  flex-row items-center flex-wrap  justify-center my-20">
        <li >
          <a
            className="font-bold text-white mx-4 lg:text-2xl md:text-2xl sm:text-sm hover:text-orange-700 transition ease-linear duration-300 "
            href="http://alitkan.com/index.php"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className="font-bold text-white  mx-4 lg:text-2xl md:text-2xl sm:text-sm hover:text-orange-700  transition ease-linear duration-300 "
            href="http://alitkan.com/about.php"
          >
            ABOUT US{" "}
          </a>
        </li>
        <li>
          {" "}
          <a
            className="font-bold text-white  mx-4 lg:text-xl md:text-xl sm:text-sm hover:text-orange-700 transition ease-linear duration-300 "
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
            className=" hover:text-white  text-orange-700 transition ease-linear duration-500 "
          >
            ALITKAN
          </a>{" "}
          2019{" "}
        </h5>
      </div>
    </div>
  );
};


