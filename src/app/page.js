'use client';
import Home from "@/components/home";
import Profile from "@/components/profile";
import Nav from "@/components/nav";
import Publications from "@/components/publications";
import Teaching from "@/components/teaching";
import Students from "@/components/students";
import Services from "@/components/services";
import { useEffect,useState } from 'react'

export default function Page() {

  
  const [location, setLocation] = useState("Home");

  useEffect(() => {
    console.log("entered");
  },[location])

  const renderSwitch = (param) => {
    switch(param) {
      case 'Home':
        return <Home/>;
      case 'Publications':
        return <Publications/>;
      case 'Teaching':
        return <Teaching/>;
      case 'Students':
        return <Students/>;
      case 'Services':
        return <Services/>;
      default:
        return <Home/>;
    }
  }

  

  return (
    <>
    <div className="container mx-auto py-[30px]">
    <div className="wrapper">
    <Profile/>
    <Nav setLocation={setLocation} location={location} />
    {renderSwitch(location)}
    </div>
    </div>
    </>
  )
}
