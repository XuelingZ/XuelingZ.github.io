'use client';

export default function Nav(props) {

   let location = props.location;
   
   const setLocationFunc = (data) =>{
  
    props.setLocation(data);
   }
    return (
        <div className="wrapper">
            <div className="topnav" id="myTopnav">
                <a href="#" className={`tablinks ${location=="Home" ? "active":""}`} onClick={(e)=>setLocationFunc('Home')}>Home</a>
                <a href="#" className={`tablinks ${location=="Publications" ? "active":""}`} onClick={(e)=>setLocationFunc('Publications')}>Publications</a>
                <a href="#" className={`tablinks ${location=="Teaching" ? "active":""}`} onClick={(e)=>setLocationFunc('Teaching')}>Teaching</a>
                <a href="#" className={`tablinks ${location=="Students" ? "active":""}`} onClick={(e)=>setLocationFunc('Students')}>Students</a>
                <a href="#" className={`tablinks ${location=="Services" ? "active":""}`} onClick={(e)=>setLocationFunc('Services')}>Services</a>
                
            </div>
        </div>
    )
  }