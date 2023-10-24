import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/static/images/logo.png";

// Chakra <Alert /> docs --> https://chakra-ui.com/docs/components/alert

function Header(alertEnabled, status, variant, notifTitle, notifDescription) {
  const pages = [
    {
      text: "Demos",
      url: "/demos",
      newTab: false,
      activeNav: true,
    },
    {
      text: "FastDL",
      url: "https://legacystrike.net/fastdl/",
      newTab: true,
      activeNav: false,
    },
    {
      text: "Support us",
      url: "/support-us",
      newTab: false,
      activeNav: true,
    },
  ];

  const displayPages = pages.map((page) => (
    <li key={page.length} className="mx-6 text-lg">
      {page.activeNav ? (
        <NavLink
          to={page.url}
          target={page.newTab ? "_blank" : "_self"}
          rel={page.newTab ? "noreferrer" : ""}
        >
          {page.text}
        </NavLink>
      ) : (
        <Link to={page.url}>{page.text}</Link>
      )}
    </li>
  ));

  return (
    <header className="backdrop-blur shadow-md text-slate-900">
      <div className="flex rounded-b-lg mx-24">
        <Link to="/" className="m-4 flex mr-auto bg-white">
          <img src={logo} width={110} height={110} />
          <span className="m-auto text-4xl font-bold">LegacyStrike</span>
        </Link>
        <ul className="flex items-center">
          {displayPages}
          <li
            style={{ backgroundColor: "#5d79ae" }}
            className="mr-auto py-2 px-8 rounded-xl font-bold text-lg"
          >
            Store
          </li>
        </ul>
      </div>

      {/* {alert ? (
        <Alert status={status} varzzziant={variant}>
          <AlertIcon />
          <AlertTitle>{notifTitle}</AlertTitle>
          <AlertDescription>{notifDescription}</AlertDescription>
        </Alert>
      ) : null} */}
    </header>
  );
}

Header.propTypes = {
  alertEnabled: PropTypes.bool,
  status: PropTypes.string,
  variant: PropTypes.string,
  notifTitle: PropTypes.string,
  notifDescription: PropTypes.string,
};

export default Header;
