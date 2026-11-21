import {createContext, useState} from "react";
import type {JSX, ReactNode} from "react";
import type {themeTypes} from "../types";

interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  theme: themeTypes;
  setTheme: React.Dispatch<React.SetStateAction<themeTypes>>;
}
export const AppStore = createContext<AppContextType | undefined>(undefined);

const AppContext = ({children}: {children: ReactNode}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [theme, setTheme] = useState<themeTypes>("dark");

  const value = {
    isLoading,
    setIsLoading,
    theme,
    setTheme,
  };
  return <AppStore.Provider value={value}>{children}</AppStore.Provider>;
};

export default AppContext;
