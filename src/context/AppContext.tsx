import {createContext, useState, type JSX, type ReactNode} from "react";

interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AppStore = createContext<AppContextType | undefined>(undefined);

const AppContext = ({children}: {children: ReactNode}): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const value = {
    isLoading,
    setIsLoading,
  };
  return <AppStore.Provider value={value}>{children}</AppStore.Provider>;
};

export default AppContext;
