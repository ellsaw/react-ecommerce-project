import { useState, useEffect } from "react";

export default function UseWindowWidth(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      setWindowWidth(window.innerWidth)
  
      window.addEventListener("resize", () => setWindowWidth(window.innerWidth))
  
      return () => window.removeEventListener("resize", () => setWindowWidth(window.innerWidth))
    }, [])

    return windowWidth;
}