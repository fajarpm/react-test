import React, { useContext, useReducer } from "react";
import Context from "components/utils/Context.js";
import { login } from "./store/actions/Actions";
import { AuthReducer } from "./store/reducers/AuthReducer";
import * as ACTION_TYPES from "components/store/actions/ActionType.js";

export default function Example() {
  const {stateAuthReducer,dispatchAuthReducer} = useContext(Context);

  const login = () => {
    console.log('clicked')
    //AuthReducer({ type: ACTION_TYPES.LOGIN, username: 'fajar', token: "123456" })
    //context.AuthReducer({ type: ACTION_TYPES.LOGIN, username: 'fajar', token: "123456" });
    dispatchAuthReducer({ type: ACTION_TYPES.LOGIN, username: 'fajar', token: "123456" })
    console.log(stateAuthReducer.isAuth)
  }

  return (
    <div>
     <input type="button" value="click" onClick={login} />
      {/* {context.isAuth ? (
        <p>Hi, {context.username}</p>
      ) : (
        <>
          <p>Please log in</p>
          <input type="button" value="click" onClick={login} /></>
      )} */}
    </div>
  );
}