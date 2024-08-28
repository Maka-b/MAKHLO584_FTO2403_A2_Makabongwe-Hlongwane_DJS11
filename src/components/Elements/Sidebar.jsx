import { useState } from "react"
import { NavLink } from "react-router-dom"
import { RiCloseLine } from "react-icons/ri"
import Modal from "../pages/Modal"
import Favourites from "../pages/Favourites"

import { logo } from "../assets"
import {links} from "../assets/constants"
import { HiDesktopComputer, HiOutlineAcademicCap, HiOutlineMenu } from "react-icons/hi"
import TestIcon from "./TestIcon"

const NavLinks =( {handleClick} ) => (
    <div className="mt-10">
        {links.map( item => {return (
            <NavLink className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
            key ={item.name}
            to ={item.to}
            onClick ={ ()=> handleClick && handleClick() }
            > 
            <item.icon className='w-6 h-6 mr-2' />
            {item.name}
            </NavLink>
        )} )}
    </div>
)

export default function Sidebar(){
    const [mobileMenuOpen, setMobileMenuOpen ] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const favLength = JSON.parse(localStorage.getItem('favourites'))?.length ||0
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
      };
    
    
    return(
        <>
            <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-black bg-opacity-80">
                <img src={logo} alt="logo" className="w-full h-20object-contain" />
                
                <NavLinks/>
            </div>
            
            <div className="absolute md:hidden block top-6">
                {mobileMenuOpen ? (
                    <RiCloseLine className="w-5 text-black mr-2"
                    onClick={()=> setMobileMenuOpen(false)} />
                    
                ): <HiOutlineMenu
                        onClick={()=> setMobileMenuOpen(true)}                    
                        className="w-5 text-green-800 mr-2"/>
                }
            </div>
            <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-t1 from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden ${ mobileMenuOpen ? 'left-0':'-left-full'}`}> 
                <img src={logo} alt="logo" className="w-full h-14 object-contain" />
                <RiCloseLine className="w-5 text-black mr-2"
                    onClick={()=> setMobileMenuOpen(false)} />

                <NavLinks handleClick={()=>{setMobileMenuOpen(false)}} />
            </div>
        </>
    )
}