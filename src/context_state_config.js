import React, { useReducer } from "react";
import Context from "components/utils/Context.js";
import * as ACTIONS from "components/store/actions/Actions.js";
import * as AuthReducer from "components/store/reducers/AuthReducer.js";
import App from "./App";

const ContextState = () => {
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer.AuthReducer,
    AuthReducer.initialState
  );

  const handleLogin = (data) => {
    dispatchAuthReducer(ACTIONS.login(data));
  };

  const handleLogout = () => {
    dispatchAuthReducer(ACTIONS.logout());
  };

  return (
    <Context.Provider
      value={{
        authState: stateAuthReducer.isAuth,
        usernameState: stateAuthReducer.username,
        tokenState: stateAuthReducer.token,
        handleUserLogin: (username) => handleLogin(username),
        handleUserLogout: () => handleLogout(),
      }}
    >
      <App />
    </Context.Provider>
  );
};

export default ContextState;