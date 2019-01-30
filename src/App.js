import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./router";
import "./App.css";
import BootNavBar from "./components/BootNavBar";

const App = ({ history }) => {
  return <BootNavBar />;
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
