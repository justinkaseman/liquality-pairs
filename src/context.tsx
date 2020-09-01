import React from "react";

type ThemeType = "light" | "dark";

interface State {
  refreshRate: number;
  theme: ThemeType;
}

type Action =
  | { type: "updateRefreshRate"; rate: number }
  | { type: "updateTheme"; theme: ThemeType };
type Dispatch = (action: Action) => void;
type GlobalProviderProps = { children: React.ReactNode };

const GlobalStateContext = React.createContext<State | undefined>(undefined);
const GlobalDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
);

function GlobalReducer(state: State, action: Action) {
  switch (action.type) {
    case "updateRefreshRate": {
      const { rate } = action;
      return { ...state, refreshRate: rate };
    }
    case "updateTheme": {
      const { theme } = action;
      localStorage.setItem("theme", theme);
      return { ...state, theme };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

const defaultState = {
  refreshRate: 5,
  theme: localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeType)
    : "light",
};

function GlobalProvider({ children }: GlobalProviderProps) {
  const [state, dispatch] = React.useReducer(GlobalReducer, defaultState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

function useGlobalState() {
  const context = React.useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
}

function useGlobalDispatch() {
  const context = React.useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error("useGlobalDispatch must be used within a GlobalProvider");
  }
  return context;
}

function useGlobal(): [State, Dispatch] {
  return [useGlobalState(), useGlobalDispatch()];
}

export { GlobalProvider, useGlobalState, useGlobalDispatch, useGlobal };
