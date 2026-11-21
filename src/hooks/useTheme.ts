import {useContext, useEffect} from "react";
import {AppStore} from "../context/AppContext";

export const useTheme = () => {
  const {theme,setTheme} = useContext(AppStore)!;
 
  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);

  return {theme, setTheme}
};
