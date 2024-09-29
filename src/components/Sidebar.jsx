import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import DropdownButton from './DropdownButton'

const Sidebar = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`fixed z-30 h-screen bg-[#091e42] text-white md:w-60 w-full p-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out sm:translate-x-0 `}>
            <div className="space-y-4 m-2">
                <div className="flex justify-between items-center sm:hidden">
                    <DropdownButton />
                    <button onClick={() => setIsOpen(false)} className="border m-4 border-gray-700 rounded-md p-2 text-2xl">
                        <AiOutlineClose />
                    </button>

                </div>
                <div className="hidden md:block">
                    <DropdownButton />
                </div>
                <nav className=''>
                    <ul className="space-y-2">
                        <li className=""><button className='flex gap-2 items-center focus:bg-[#172b4d] hover:bg-[#172b4d] w-[220px] p-2 rounded-md'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.65487 1.84315C8.42065 1.66099 8.30354 1.5699 8.17423 1.53489C8.06013 1.504 7.93987 1.504 7.82577 1.53489C7.69646 1.5699 7.57935 1.66099 7.34513 1.84315L2.82359 5.3599C2.52135 5.59498 2.37022 5.71252 2.26135 5.85973C2.16491 5.99012 2.09307 6.13701 2.04935 6.29319C2 6.4695 2 6.66095 2 7.04386V11.8671C2 12.6139 2 12.9872 2.14532 13.2725C2.27316 13.5233 2.47713 13.7273 2.72801 13.8552C3.01323 14.0005 3.3866 14.0005 4.13333 14.0005H5.46667C5.65335 14.0005 5.74669 14.0005 5.818 13.9641C5.88072 13.9322 5.93171 13.8812 5.96367 13.8185C6 13.7472 6 13.6538 6 13.4671V9.06714C6 8.69378 6 8.50709 6.07266 8.36448C6.13658 8.23904 6.23856 8.13706 6.36401 8.07314C6.50661 8.00048 6.6933 8.00048 7.06667 8.00048H8.93333C9.3067 8.00048 9.49339 8.00048 9.63599 8.07314C9.76143 8.13706 9.86342 8.23904 9.92734 8.36448C10 8.50709 10 8.69378 10 9.06714V13.4671C10 13.6538 10 13.7472 10.0363 13.8185C10.0683 13.8812 10.1193 13.9322 10.182 13.9641C10.2533 14.0005 10.3466 14.0005 10.5333 14.0005H11.8667C12.6134 14.0005 12.9868 14.0005 13.272 13.8552C13.5229 13.7273 13.7268 13.5233 13.8547 13.2725C14 12.9872 14 12.6139 14 11.8671V7.04386C14 6.66095 14 6.4695 13.9506 6.29319C13.9069 6.13701 13.8351 5.99012 13.7386 5.85973C13.6298 5.71252 13.4787 5.59499 13.1764 5.35991L8.65487 1.84315Z" stroke="#BAC1CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <span>Home</span>
                        </button>
                        </li>
                        <li className=""><button className='flex gap-2 items-center focus:bg-[#172b4d] hover:bg-[#172b4d] w-[220px] p-2 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4.04834 4.81169L1.90721 5.38575L1.3335 3.24332M8.00016 4.66683V8.00016L10.0002 9.3335M1.3335 8.00016C1.3335 11.6821 4.31826 14.6668 8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335C5.2664 1.3335 2.91696 2.97896 1.88822 5.3335" stroke="#BAC1CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Past streams</span>
                        </button>
                        </li>
                        <li className=""><button className='flex gap-2 items-center focus:bg-[#172b4d] hover:bg-[#172b4d] w-[220px] p-2 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.3335 8.00016H14.6668M1.3335 4.66683H4.66683M11.3335 4.66683H14.6668M1.3335 11.3335H4.66683M11.3335 11.3335H14.6668M4.66683 14.6668V1.3335M11.3335 14.6668V1.3335M4.5335 14.6668H11.4668C12.5869 14.6668 13.147 14.6668 13.5748 14.4488C13.9511 14.2571 14.2571 13.9511 14.4488 13.5748C14.6668 13.147 14.6668 12.5869 14.6668 11.4668V4.5335C14.6668 3.41339 14.6668 2.85334 14.4488 2.42552C14.2571 2.04919 13.9511 1.74323 13.5748 1.55148C13.147 1.3335 12.5869 1.3335 11.4668 1.3335H4.5335C3.41339 1.3335 2.85334 1.3335 2.42552 1.55148C2.04919 1.74323 1.74323 2.04919 1.55148 2.42552C1.3335 2.85334 1.3335 3.41339 1.3335 4.5335V11.4668C1.3335 12.5869 1.3335 13.147 1.55148 13.5748C1.74323 13.9511 2.04919 14.2571 2.42552 14.4488C2.85334 14.6668 3.41339 14.6668 4.5335 14.6668Z" stroke="#BAC1CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Video storage</span>
                        </button>
                        </li>
                        <li className=""><button className='flex gap-2 items-center focus:bg-[#172b4d] hover:bg-[#172b4d] w-[220px] p-2 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M7.05735 8.94297C6.53666 8.42227 6.53666 7.57805 7.05735 7.05735C7.57805 6.53666 8.42227 6.53666 8.94297 7.05735C9.46367 7.57805 9.46367 8.42227 8.94297 8.94297M5.17174 10.8286C3.60964 9.26649 3.60964 6.73383 5.17174 5.17174C6.73383 3.60964 9.26649 3.60964 10.8286 5.17174C12.3907 6.73383 12.3907 9.26649 10.8286 10.8286M3.28612 12.7142C0.682622 10.1107 0.682622 5.88961 3.28612 3.28612C5.88961 0.682622 10.1107 0.682622 12.7142 3.28612C15.3177 5.88961 15.3177 10.1107 12.7142 12.7142" stroke="#BAC1CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Channels</span>
                        </button>
                        </li>
                        <li className=""><button className='flex gap-2 items-center focus:bg-[#172b4d] hover:bg-[#172b4d] w-[220px] p-2 rounded-md'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 8H4.06667C3.6933 8 3.50661 8 3.36401 8.07266C3.23856 8.13658 3.13658 8.23856 3.07266 8.36401C3 8.50661 3 8.6933 3 9.06667V12.9333C3 13.3067 3 13.4934 3.07266 13.636C3.13658 13.7614 3.23856 13.8634 3.36401 13.9273C3.50661 14 3.6933 14 4.06667 14H7M7 14H11M7 14L7 5.73333C7 5.35997 7 5.17328 7.07266 5.03067C7.13658 4.90523 7.23856 4.80324 7.36401 4.73933C7.50661 4.66667 7.6933 4.66667 8.06667 4.66667H9.93333C10.3067 4.66667 10.4934 4.66667 10.636 4.73933C10.7614 4.80324 10.8634 4.90523 10.9273 5.03067C11 5.17328 11 5.35996 11 5.73333V14M11 14H13.9333C14.3067 14 14.4934 14 14.636 13.9273C14.7614 13.8634 14.8634 13.7614 14.9273 13.636C15 13.4934 15 13.3067 15 12.9333V3.06667C15 2.6933 15 2.50661 14.9273 2.36401C14.8634 2.23856 14.7614 2.13658 14.636 2.07266C14.4934 2 14.3067 2 13.9333 2H12.0667C11.6933 2 11.5066 2 11.364 2.07266C11.2386 2.13658 11.1366 2.23857 11.0727 2.36401C11 2.50661 11 2.6933 11 3.06667V5.33333" stroke="#BAC1CC" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>Analytics</span>
                        </button>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="absolute bottom-2 space-y-3 mb-3 ml-4 text-xs text-gray-500 ">
                <div className="flex gap-4">
                    <a className='hover:underline' href="">Pricing</a>
                    <a className='hover:underline' href="">API</a>
                    <a className='hover:underline' href="">Referral Program</a>
                </div>
                <div className="flex gap-4">
                    <a className='hover:underline' href="">Speed Test</a>
                    <a className='hover:underline' href="">Terms</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
