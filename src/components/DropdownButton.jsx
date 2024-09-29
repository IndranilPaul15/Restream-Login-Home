import React, { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const DropdownButton = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    email: currentUser.email,
                    photoURL: currentUser.photoURL
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">

            <button
                onClick={toggleDropdown}
                className="flex items-center focus:bg-[#172b4d] hover:bg-[#172b4d] p-2 rounded-md w-[220px]">
                <img
                    src={user?.photoURL || 'default_profile_picture.jpg'} 
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                />

                <span className='overflow-hidden text-ellipsis'>{user?.email || 'Loading...'}</span>

                
                {isOpen ? <FaCaretUp className="ml-2" /> : <FaCaretDown className="ml-2" />}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="absolute left-0 mt-2 bg-white rounded-md shadow-lg "
                >
                    <ul className="py-1 z-1000">
                        <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"><button className='flex items-center gap-3 '>
                            <div className="size-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="NestedAccountSelectContent_actionButtonIcon__2Gu1s"><path d="M12.6668 14V10M10.6668 12H14.6668M8.00016 10H5.3335C4.09099 10 3.46973 10 2.97967 10.203C2.32627 10.4736 1.80713 10.9928 1.53648 11.6462C1.3335 12.1362 1.3335 12.7575 1.3335 14M10.3335 2.19384C11.3108 2.58943 12.0002 3.54754 12.0002 4.66667C12.0002 5.78579 11.3108 6.7439 10.3335 7.13949M9.00016 4.66667C9.00016 6.13943 7.80626 7.33333 6.3335 7.33333C4.86074 7.33333 3.66683 6.13943 3.66683 4.66667C3.66683 3.19391 4.86074 2 6.3335 2C7.80626 2 9.00016 3.19391 9.00016 4.66667Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            Create team
                        </button></li>
                        <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"><button className='flex items-center gap-3'  >
                            <div className="size-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="NestedAccountSelectContent_actionButtonIcon__2Gu1s"><path d="M0.667969 6.66699H15.3346M2.0013 2.66699H14.0013C14.7377 2.66699 15.3346 3.26395 15.3346 4.00033V12.0003C15.3346 12.7367 14.7377 13.3337 14.0013 13.3337H2.0013C1.26492 13.3337 0.667969 12.7367 0.667969 12.0003V4.00033C0.667969 3.26395 1.26492 2.66699 2.0013 2.66699Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            Billing</button></li>
                        <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer"><button className='flex items-center gap-3'>
                            <div className="size-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="NestedAccountSelectContent_actionButtonIcon__2Gu1s"><path d="M8.0013 10.0003C9.10587 10.0003 10.0013 9.10489 10.0013 8.00033C10.0013 6.89576 9.10587 6.00033 8.0013 6.00033C6.89673 6.00033 6.0013 6.89576 6.0013 8.00033C6.0013 9.10489 6.89673 10.0003 8.0013 10.0003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.9346 10.0003C12.8459 10.2014 12.8194 10.4245 12.8586 10.6407C12.8978 10.857 13.0009 11.0565 13.1546 11.2137L13.1946 11.2537C13.3186 11.3775 13.4169 11.5245 13.484 11.6864C13.5511 11.8483 13.5857 12.0218 13.5857 12.197C13.5857 12.3722 13.5511 12.5457 13.484 12.7076C13.4169 12.8694 13.3186 13.0165 13.1946 13.1403C13.0708 13.2643 12.9238 13.3626 12.7619 13.4297C12.6 13.4968 12.4265 13.5314 12.2513 13.5314C12.0761 13.5314 11.9026 13.4968 11.7407 13.4297C11.5789 13.3626 11.4318 13.2643 11.308 13.1403L11.268 13.1003C11.1108 12.9466 10.9113 12.8435 10.695 12.8043C10.4788 12.7651 10.2557 12.7916 10.0546 12.8803C9.85746 12.9648 9.68929 13.1052 9.57084 13.284C9.45239 13.4629 9.38882 13.6725 9.38797 13.887V14.0003C9.38797 14.3539 9.24749 14.6931 8.99744 14.9431C8.7474 15.1932 8.40826 15.3337 8.05463 15.3337C7.70101 15.3337 7.36187 15.1932 7.11183 14.9431C6.86178 14.6931 6.7213 14.3539 6.7213 14.0003V13.9403C6.71614 13.7197 6.64471 13.5057 6.51631 13.3261C6.3879 13.1466 6.20846 13.0098 6.0013 12.9337C5.80022 12.8449 5.57717 12.8184 5.36091 12.8577C5.14465 12.8969 4.94509 13 4.78797 13.1537L4.74797 13.1937C4.62414 13.3176 4.47709 13.416 4.31522 13.4831C4.15336 13.5502 3.97986 13.5847 3.80464 13.5847C3.62941 13.5847 3.45591 13.5502 3.29405 13.4831C3.13218 13.416 2.98513 13.3176 2.8613 13.1937C2.73733 13.0698 2.63899 12.9228 2.57189 12.7609C2.50479 12.599 2.47025 12.4255 2.47025 12.2503C2.47025 12.0751 2.50479 11.9016 2.57189 11.7397C2.63899 11.5779 2.73733 11.4308 2.8613 11.307L2.9013 11.267C3.05499 11.1099 3.15809 10.9103 3.1973 10.6941C3.23652 10.4778 3.21005 10.2547 3.1213 10.0537C3.03679 9.85648 2.89647 9.68831 2.71761 9.56986C2.53875 9.45141 2.32916 9.38785 2.11464 9.38699H2.0013C1.64768 9.38699 1.30854 9.24652 1.05849 8.99647C0.808445 8.74642 0.667969 8.40728 0.667969 8.05366C0.667969 7.70004 0.808445 7.3609 1.05849 7.11085C1.30854 6.8608 1.64768 6.72033 2.0013 6.72033H2.0613C2.28196 6.71516 2.49597 6.64374 2.6755 6.51533C2.85503 6.38693 2.99178 6.20748 3.06797 6.00033C3.15671 5.79925 3.18318 5.5762 3.14397 5.35993C3.10476 5.14367 3.00166 4.94411 2.84797 4.78699L2.80797 4.74699C2.684 4.62316 2.58565 4.47611 2.51856 4.31425C2.45146 4.15238 2.41692 3.97888 2.41692 3.80366C2.41692 3.62844 2.45146 3.45494 2.51856 3.29307C2.58565 3.13121 2.684 2.98416 2.80797 2.86033C2.9318 2.73636 3.07885 2.63801 3.24071 2.57091C3.40258 2.50381 3.57608 2.46928 3.7513 2.46928C3.92652 2.46928 4.10002 2.50381 4.26189 2.57091C4.42375 2.63801 4.5708 2.73636 4.69464 2.86033L4.73464 2.90033C4.89175 3.05402 5.09131 3.15712 5.30758 3.19633C5.52384 3.23554 5.74689 3.20907 5.94797 3.12033H6.0013C6.19848 3.03582 6.36665 2.8955 6.4851 2.71664C6.60355 2.53778 6.66711 2.32818 6.66797 2.11366V2.00033C6.66797 1.6467 6.80844 1.30756 7.05849 1.05752C7.30854 0.807468 7.64768 0.666992 8.0013 0.666992C8.35492 0.666992 8.69406 0.807468 8.94411 1.05752C9.19416 1.30756 9.33463 1.6467 9.33463 2.00033V2.06033C9.33549 2.27485 9.39906 2.48444 9.51751 2.6633C9.63596 2.84216 9.80412 2.98248 10.0013 3.06699C10.2024 3.15574 10.4254 3.18221 10.6417 3.143C10.858 3.10378 11.0575 3.00068 11.2146 2.84699L11.2546 2.80699C11.3785 2.68302 11.5255 2.58468 11.6874 2.51758C11.8492 2.45048 12.0227 2.41594 12.198 2.41594C12.3732 2.41594 12.5467 2.45048 12.7086 2.51758C12.8704 2.58468 13.0175 2.68302 13.1413 2.80699C13.2653 2.93082 13.3636 3.07787 13.4307 3.23974C13.4978 3.4016 13.5324 3.5751 13.5324 3.75033C13.5324 3.92555 13.4978 4.09905 13.4307 4.26091C13.3636 4.42278 13.2653 4.56983 13.1413 4.69366L13.1013 4.73366C12.9476 4.89078 12.8445 5.09034 12.8053 5.3066C12.7661 5.52286 12.7926 5.74591 12.8813 5.94699V6.00033C12.9658 6.1975 13.1061 6.36567 13.285 6.48412C13.4639 6.60257 13.6734 6.66614 13.888 6.66699H14.0013C14.3549 6.66699 14.6941 6.80747 14.9441 7.05752C15.1942 7.30756 15.3346 7.6467 15.3346 8.00033C15.3346 8.35395 15.1942 8.69309 14.9441 8.94313C14.6941 9.19318 14.3549 9.33366 14.0013 9.33366H13.9413C13.7268 9.33451 13.5172 9.39808 13.3383 9.51653C13.1595 9.63498 13.0191 9.80315 12.9346 10.0003Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            Settings</button></li>
                        <li className="px-4 py-2 hover:bg-gray-100 text-gray-800 cursor-pointer">
                            <div className="flex items-center">
                                <img
                                    src={user?.photoURL || 'default_profile_picture.jpg'} 
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full mr-2"
                                />

                                <div>
                                    <span className='text-xs'>{user?.email || 'Loading...'}</span>
                                    <br />
                                    <small className="text-gray-800">Personal • Basic</small>
                                </div>
                            </div>
                        </li>
                        <li className="border-t text-gray-800 px-4 py-2 hover:bg-gray-100 cursor-pointer"><button className='flex items-center gap-3 'onClick={() => navigate('/')}>
                            <div className="size-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" class="NestedAccountSelectContent_actionButtonIcon__2Gu1s"><path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            Log out</button></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownButton;
