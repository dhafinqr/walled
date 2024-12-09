import {useState} from "react";
import logo from "./assets/Vector.png"
import './App.css'
import NavItems from "./components/NavItems"

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const menu = [
    {
      title: "Dashboard",
      link: "#",
    },
    {
      title: "Transfer",
      link: "#",
    },
    {
      title: "Top Up",
      link: "#",
    },
    {
      title: "Sign Out",
      link: "#",
    },
  ]
  
  return (
    <>
    <nav className="flex items-center w-screen justify-between bg-white py-4 px-8">
      <img src={logo} />
      <NavItems menu={menu} activeTab={activeTab} handleClick={setActiveTab} />
    </nav>
    </>
  )
}

export default App
