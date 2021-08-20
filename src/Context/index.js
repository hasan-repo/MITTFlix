import React, { useReducer } from "react";

import { AppReducer, initialState } from './reducer';

const appDispatch = React.createContext({ initialState });
const appState = React.createContext({ initialState });



export function useAppState() {
  const context = React.useContext(appState);
  if (context === undefined) {
    throw new Error("error in appstate");
  }

  return context;
}

export function useAppDispatch() {
  const context = React.useContext(appDispatch);
  if (context === undefined) {
    throw new Error("error in Dispatch");
  }

  return context;
}


export const AppProvaider = ({ children }) => {
  const [watchList, dispatch] = useReducer(AppReducer, initialState);

  return (
    <appState.Provider value={watchList}>
      <appDispatch.Provider value={dispatch}>\ ///return
        {children}
      </appDispatch.Provider>
    </appState.Provider>
  );
};