import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode: 'light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
});


//this is custom hook useTheme()
export default function useTheme(){
    return useContext(ThemeContext);
}
