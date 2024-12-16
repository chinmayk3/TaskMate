import React, { useEffect, useState } from 'react'
import  Logo  from '../assets/tmate.png'

const Header = () => {

  const [theme, setTheme ] = useState( JSON.parse(localStorage.getItem("theme")) || "light");

  useEffect(()=>{
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme))
  },[theme])


  return (
    <header>
      <div className='logo'>
          <img src={Logo} alt='TaskMate Logo'/>
          <span>
            TaskMate
          </span>
      </div>
      <div className='themeSelector'>
          <span className={ theme === "light" ? "light activeTheme" : "light"} onClick={()=> setTheme("light")}/>
          <span className={ theme === "medium" ? "medium activeTheme" : "medium"} onClick={()=> setTheme("medium")} />
          <span className={ theme === "dark" ? "dark activeTheme" : "dark"} onClick={()=> setTheme("dark")} />
          <span className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}onClick={()=> setTheme("gOne")}/>
          <span className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}  onClick={()=> setTheme("gTwo")}/>
          <span className={ theme === "gThree" ? "gThree activeTheme" : "gThree"} onClick={()=> setTheme("gThree")} />
        
      </div>
    </header>
  )
}

export default Header