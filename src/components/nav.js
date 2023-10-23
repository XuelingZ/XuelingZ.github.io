'use client';
import envelope from './../../public/bars-solid.svg';
import Image from 'next/image';
import { useState } from 'react';

export default function Nav(props) {

   let location = props.location;
   const [menu, setMenu] = useState(false);
   const [menuclick, setMenuclick] = useState(false);

   const handleMenuClick = () =>{
    setMenuclick(!menuclick);
   }
   
   const setLocationFunc = (data) =>{
  
    props.setLocation(data);
   }
    return (
        <div className="wrapper">
            <div className={`topnav ${menuclick ? "responsive":""}`} id="myTopnav">
                <a href="#" className={`tablinks ${location=="Home" ? "active":""}`} onClick={(e)=>{setLocationFunc('Home'),handleMenuClick(e)}}>Home</a>
                <a href="#" className={`tablinks ${location=="Publications" ? "active":""}`} onClick={(e)=>{setLocationFunc('Publications'),handleMenuClick(e)}}>Publications</a>
                <a href="#" className={`tablinks ${location=="Teaching" ? "active":""}`} onClick={(e)=>{setLocationFunc('Teaching'),handleMenuClick(e)}}>Teaching</a>
                <a href="#" className={`tablinks ${location=="Students" ? "active":""}`} onClick={(e)=>{setLocationFunc('Students'),handleMenuClick(e)}}>Students</a>
                <a href="#" className={`tablinks ${location=="Services" ? "active":""}`} onClick={(e)=>{setLocationFunc('Services'),handleMenuClick(e)}}>Services</a>
                <a className="icon" onClick={(e)=>handleMenuClick(e)}>
		        <Image className={'profile-icon'} src={envelope}/> Menu
	            </a>
            </div>
        </div>
    )
  }