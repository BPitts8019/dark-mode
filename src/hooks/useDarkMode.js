import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function useDarkMode () {
   const [isDarkMode, setIsDarkMode] = useLocalStorage("dmDarkMode", false);

   useEffect(() => {
      document.body.classList.toggle("dark-mode", isDarkMode);
   }, [isDarkMode]);

   return [isDarkMode, setIsDarkMode];
}