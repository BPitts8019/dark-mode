import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function useDarkMode (initialValue) {
   const [isDarkMode, setIsDarkMode] = useLocalStorage("dmDarkMode", initialValue);

   useEffect(() => {
      document.body.classList.toggle("dark-mode", isDarkMode);
   }, [isDarkMode]);

   return [isDarkMode, setIsDarkMode];
}