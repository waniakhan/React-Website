import React, { useEffect } from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi'
import { TbBrandSolidjs } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom';


export default function SideBar() {
const location = useLocation()

    const NavItems = [
        {
        tab: "Home",
        url: "/",
        icon: <AiOutlineHome />
    },
    {
        tab: "Categories",
        url: "/category",
        icon: <BiCategory />
    },
    {
        tab: "Brands",
        url: "/brands",
        icon: <TbBrandSolidjs />
    },
    {
        tab: "Products",
        url: "/products",
        icon: <TbBrandSolidjs />
    }
]




    return (
        <>
            <div className='bg-primary p-3  d-flex text-white justify-content-between align-items-center'>
                <span>Admin Name</span>
                <button className="btn btn-outline-light">Logout</button>
            </div>

            <ul className="nav flex-column pt-3">
                {
                    NavItems.map((val, key) =>
                     <li key={key} className={`nav-item  m-2  ${location.pathname == val.url ? 'bg-white rounded' : null}`}>

                        <Link className='Nav-link d-flex align-items-center gap-3 text-decoration-none  mb-2' to={val.url}>
                            <span>{val.icon}</span>
                        <span>    {val.tab}</span>
                        </Link>
                    </li>)

                }

            </ul>

        </>
    )
}
