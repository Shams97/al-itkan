import React from 'react'
import LOGO from './asstes/logo.png'
import Footer_image from './asstes/footer.png'
import Facebook from './asstes/facebook.png';

export default function Header() {
    return (
        <div className="flex flex-row  justify-between px-8 pt-6 pb-4" style={{backgroundColor:'#8c8c8c'  }}  > 
  <div className="flex flex-row ">
  <img src={LOGO} width="100" height="100"/> <span className="text-xs text-white text-left mt-4">jobs</span>
  </div>
  <ul className="flex flex-row  px-4 ">
                    <li className="mx-2 text-white hover:text-black "><a href="http://alitkan.com/index.php">HOME</a></li>
                    
        
                    <li className="mx-2  text-white hover:text-black">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"> SERVICE <i className="fa fa-angle-down"></i></a>
                        {/* <ul class="dropdown-menu">
                            <li><a href="http://alitkan.com/tops.php">tops</a></li>
                            <li><a href="http://alitkan.com/acts.php">acts</a></li>
                            <li><a href="http://alitkan.com/agencies.php">agencies</a></li>
                            
                        </ul> */}
                    </li>  
                     {/* <li className="mx-2 text-white hover:text-black">
                        <a href="http://alitkan.com/#" className="dropdown-toggle" data-toggle="dropdown">Brands<i className="fa fa-angle-down"></i></a>
                        <ul class="dropdown-menu">
                                                        <li><a target="_blank" href="https://www.healthcare.siemens.com/">Siemens</a></li>
                                                        <li><a target="_blank" href="https://www.getinge.com/">GETINGE</a></li>
                                                        <li><a target="_blank" href="http://www.enraf-nonius.com/">Enraf Nonius</a></li>
                                                        <li><a target="_blank" href="https://www.varian.com/">Varian</a></li>
                                                        <li><a target="_blank" href="https://www.iba-radiopharmasolutions.com">Iba</a></li>
                                                        <li><a target="_blank" href="https://www.karlstorz.com">Karl Storz</a></li>
                                                        <li><a target="_blank" href="http://www.mindray.com/en/index.html">Mindray</a></li>

                                                        
                                                    </ul> 
                    </li>*/}
                   
                    <li className="mx-2 text-white text-bold hover:text-black"><a href="http://alitkan.com/projects.php">PROJECTS</a></li>
                    <li className="mx-2 text-white text-bold  hover:text-black"><a href="http://alitkan.com/index.php#news">NEWS</a></li>
                    

                         <li className="mx-2 text-white text-bold  hover:text-black"><a href="http://alitkan.com/about.php">ABOUT</a></li>
                            <li className="mx-2 text-white text-bold  hover:text-black"><a href="http://alitkan.com/contact.php">CONTACT US </a></li>
                    
                </ul> 
  </div>
    )
}



export const Footer =()=>{
    return <>
    <div className="flex flex-col h-64 w-full " 
    style={{backgroundImage:`url(${Footer_image})`, backgroundSize:'cover', backgroundRepeat:'no-repeat' }}
    >
              <ul  className="flex flex-row justify-center my-20" >  

                        <li><a  className="font-bold text-white mx-4" href="http://alitkan.com/index.php">HOME</a></li>
                     <li><a className="font-bold text-white  mx-4" href="http://alitkan.com/about.php">ABOUT US </a></li>
                     <li> <a  className="font-bold text-white  mx-4" href="http://alitkan.com/contact.php">CONTACT US</a></li>

                     <li>  
                         <a  target="_blank" href="https://www.facebook.com/alitkan.iq/">
                         <img src={Facebook} alt="facebook " className="h-16 w-16 ml-8"
                         style={{marginTop:'-21px'}}
                         />



                         </a>
                         </li>
                 </ul>
                 {/* <hr className="h-2 color-black"/> */}
                 <div className="flex flex-row justify-start ml-4">
                 <h5   className="font-bold text-white"> Copyright <a href="http://alitkan.com/index.php" 
                 style={{color:'#e65c00' , fontWeight:'bold'}}
                >ALITKAN</a>  2019 </h5>

                 </div>
                     </div>
                     
                     </>
}