import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

// Chakra <Alert /> docs --> https://chakra-ui.com/docs/components/alert

function Header({ status, variant, notifTitle, notifDescription }) {
  return (
    <header>
      <span>header</span>
      {alert ? (
        <Alert status={status} variant={variant}>
          <AlertIcon />
          <AlertTitle>{notifTitle}</AlertTitle>
          <AlertDescription>{notifDescription}</AlertDescription>
        </Alert>
      ) : null}
    </header>
  );
}

Header.propTypes = {
  status: alert ? PropTypes.string.isRequired : PropTypes.string,
  variant: alert ? PropTypes.string.isRequired : PropTypes.string,
  notifTitle: alert ? PropTypes.string.isRequired : PropTypes.string,
  notifDescription: alert ? PropTypes.string.isRequired : PropTypes.string,
};

export default Header;
