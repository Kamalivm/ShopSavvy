import React from 'react'
import {HiOutlineMenuAlt2,HiOutlineHome} from 'react-icons/hi'
import {CiShoppingCart,CiDeliveryTruck} from 'react-icons/ci'
import {IoHeart} from 'react-icons/io5'
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='fixed top-0 let-0 h-screen p-2 bg-gray-100'>
      <ul className='p-5 space-y-8'>

        <li>
          <button>
            <HiOutlineMenuAlt2 size={'1.5rem'}/>
          </button>
        </li>
        
        <li>
          <NavLink to='/'>
          <button>
            <HiOutlineHome size={'1.5rem'}/>
          </button>
          </NavLink>
        </li>
        
        <li>
          <NavLink to='/cart'>
          <button>
            <CiShoppingCart size={'1.5rem'}/>
          </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/favs'>
          <button>
            <IoHeart color={'red'} size={'1.5rem'}/>
          </button>
          </NavLink>
        </li>

        <li>
          <NavLink to='/orders'>
          <button>
            <CiDeliveryTruck size={'1.5rem'}/>
          </button>
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default SideBar