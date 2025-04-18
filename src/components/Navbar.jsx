import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible,setVisible] = useState(false)
    const {showSearch ,setShowSearch} =  useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to={'/'}>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>
        <ul className='hidden sm:flex gap-4 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 h-[1.6px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 h-[1.6px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='about' className='flex flex-col items-center gap-1'> 
                <p>ABOUT</p>
                <hr className='w-2/4 h-[1.6px] border-none bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 h-[1.6px] border-none bg-gray-700 hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=> setShowSearch(!showSearch)} src={assets.search_icon} className='cursor-pointer w-4' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-4 cursor-pointer' alt="" />
                <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-400'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>My Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to={'/cart'} className='relative'>
            <img src={assets.cart_icon} className='w-4 min-w-4 cursor-pointer' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center rounded-full text-white bg-black leading-4 aspect-square text-[9px]'>10</p>
            </Link>
            <img onClick={()=>{setVisible(true)}} src={assets.menu_icon} className='w-4 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* sidebar menu for small screen  */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full': 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer '>
                    <img src={assets.dropdown_icon} className='rotate-180 h-4' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 hover:bg-gray-100'} to={'/'}>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 hover:bg-gray-100'} to={'/collection'}>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 hover:bg-gray-100'} to={'about'}>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className={'py-2 pl-6 hover:bg-gray-100'} to={'/contact'}>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar