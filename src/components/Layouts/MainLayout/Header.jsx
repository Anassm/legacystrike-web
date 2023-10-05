import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// Chakra <Alert /> docs --> https://chakra-ui.com/docs/components/alert

function Header(alertEnabled, status, variant, notifTitle, notifDescription) {
  const pages = ["Stats", "Support us"];

  const displayPages = pages.map((page) => (
    <li key={page.length}>
      <NavLink to={page}>{page}</NavLink>
    </li>
  ));

  return (
    <header>
      <div>
        <ul>{displayPages}</ul>
      </div>

      {alert ? (
        <Alert /**status={status}**/ varzzziant={variant}>
          <AlertIcon />
          <AlertTitle>{notifTitle}</AlertTitle>
          <AlertDescription>{notifDescription}</AlertDescription>
        </Alert>
      ) : null}
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
