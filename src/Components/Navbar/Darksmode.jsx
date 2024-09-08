
import Lightbutton from "../../assets/website/light-mode-button.png"
import Darkbutton from "../../assets/website/dark-mode-button.png"
import { useEffect, useState } from "react"

const Darksmode = () => {
    const[theme,settheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme") :"light");
    const element = document.documentElement;

    // DARKMODE LIGHTMODE Function

    useEffect(()=>{
        if(theme =="dark"){
            element.classList.add("dark");
            localStorage.setItem("theme","dark");

        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    })
  return (
    <div className="relative">
        <img src={Lightbutton} alt="LightButton" onClick={()=>{
            settheme(theme === "light" ? "dark" : "light");

        }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,0.1) transition-all duration-300 absolute right-0n ${theme == "dark" ? "opacity-0" : "opacity-100"} z-10]`} />
        <img src={Darkbutton }alt="Dark Button" onClick={()=>{
             settheme(theme === "light" ? "dark" : "light");
        }}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0,0.1) transition-all duration-300`} />
 

    </div>
  )
}

export default Darksmode