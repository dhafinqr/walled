import { createContext, useContext } from "react";
// import { GiMoon } from "react-icons/gi";

export const themeContext = createContext({
themeMode : "light",
darkTheme : ()=>{},
lightTheme : ()=>{}
});//default value


export const ThemeContextProvider = themeContext.Provider;

export default function useTheme() {
return useContext(themeContext);
}     