import useLocalStroage from "./useLocalStroage"
import './style.css'



function Darklight() {
    const[theme,setTheme]=useLocalStroage("theme" , "dark")

    function handleChange(){
        setTheme(theme === "dark"?"light":"dark")
    }
  return (
   <div className="container" data-theme={theme}>
  <div className="box">
  <h1>Hellow World</h1>
  <button className="button" onClick={handleChange}>Change Theme</button>
  </div>
   </div>
  )
}

export default Darklight ;