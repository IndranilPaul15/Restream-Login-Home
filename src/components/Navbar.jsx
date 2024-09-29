import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = ({ setIsOpen }) => {
  return (
    <div>
      <header className="w-full md:hidden bg-[#172b4d] text-white p-4 fixed top-0 left-0 flex justify-between items-center z-20 sm:pl-64">
            <div className="flex items-center w-full justify-between">
                <h1 className="ml-4 text-2xl font-bold  ">Restream App</h1>
                <button className="text-2xl sm:hidden border border-gray-700 rounded-md p-2" onClick={() => setIsOpen((prev) => !prev)}>
                    <AiOutlineMenu />
                </button>
            </div>
        </header>
    </div>
  )
}

export default Navbar
