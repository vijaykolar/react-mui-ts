import { createContext, ReactNode, useContext, useMemo, useReducer } from "react";

// React TS main context
const MaterialUI = createContext<any>(null);

// Setting custom name for the context which is visible on react dev tools
MaterialUI.displayName = "MaterialUIContext";

// types
interface StateTypes {
  darkMode: boolean;
}

interface ActionTypes {
  type: "DARKMODE";
  value: any;
}

// React TS reducer
function reducer(state: StateTypes, action: ActionTypes) {
  switch (action.type) {
    case "DARKMODE": {
      return { ...state, darkMode: action.value };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

// React TS context provider
function MaterialUIControllerProvider({ children }: { children: ReactNode }): JSX.Element {
  const initialState: StateTypes = {
    darkMode: false,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

// React custom hook for using context
function useMaterialUIController() {
  const context = useContext(MaterialUI);

  if (!context) {
    throw new Error(
      "useMaterialUIController should be used inside the MaterialUIControllerProvider."
    );
  }

  return context;
}

// Context module functions
const setDarkMode = (
  dispatch: (arg: { type: "DARKMODE"; value: boolean }) => void,
  value: boolean
) => dispatch({ type: "DARKMODE", value });

export { MaterialUIControllerProvider, useMaterialUIController, setDarkMode };
