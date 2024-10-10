import React, { createContext, useContext } from "react";
import { StyledEngineProvider } from "@mui/material/styles";

const StyleContext = createContext<boolean>(false);

export const useStyleContext = () => useContext(StyleContext);

export const StyleProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <StyleContext.Provider value={true}>
      <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
    </StyleContext.Provider>
  );
};

export function withTailwindStyles<T>(Component: React.ComponentType<T>) {
  const WrappedComponent: React.FC<T> = (props) => {
    const hasStyleContext = useStyleContext();

    if (hasStyleContext) {
      return <Component {...props} />;
    }

    return (
      <StyleProvider>
        <Component {...props} />
      </StyleProvider>
    );
  };

  WrappedComponent.displayName = Component.displayName || Component.name;

  return WrappedComponent;
}
