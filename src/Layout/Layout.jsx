import React, { useEffect, useState } from 'react'
import { postCategories } from '../APIRequest/APIRequest'
import { Link, NavLink } from 'react-router-dom'

const Layout = (props) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    {
      ;(async () => {
        let catagories = await postCategories()
        setCategories(catagories)
      })()
    }
  }, [])

  return (
    <div>
      <div className="navbar bg-base-100 shadow-md top-0 sticky">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-md  w-52"
            >
              <li className="shadow-md bottom-1 ">
                <NavLink to="/"> হোম </NavLink>
              </li>

              {categories.map((item, index) => {
                return (
                  <li
                    className="shadow-sm bottom-1 bg-slate-500 p-1"
                    key={index.toString()}
                  >
                    {' '}
                    <NavLink to={'/byCategory/' + item.id}>
                      {' '}
                      {item.name}{' '}
                    </NavLink>{' '}
                  </li>
                )
              })}
            </ul>
          </div>
          <NavLink className="btn btn-ghost normal-case text-xl">
            {' '}
            <div className="border ring-2">
              <span className="text-red-500 font-bold text-xl bg-yellow-100">
                P
              </span>
              <span className="text-yellow-900 font-bold text-xl bg-red-100">
                A
              </span>
            </div>{' '}
            প্রথম আলো{' '}
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  ">
            <li>
              <NavLink to="/"> হোম </NavLink>
            </li>
            {categories.map((item, index) => {
              return (
                <li key={index.toString()} className="bg-slate-800">
                  {' '}
                  <NavLink to={'/byCategory/' + item.id}>
                    {' '}
                    {item.name}{' '}
                  </NavLink>{' '}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default Layout
