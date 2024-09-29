import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';

const Home = () => {

    useEffect(() => {
        document.title = "Home Page | ";
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen">
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

                <div className="flex-1 flex flex-col bg-[#172b4d] h-screen relative">
                    <Navbar setIsOpen={setIsOpen} />
                    <Content />
                    <button className=" transition-all size-12 hover:size-14 bg-slate-700 m-2.5 absolute right-0 bottom-1 rounded-full text-gray-300 text-xs "> Need help?</button>

                </div>
            </div>
        </>
    );
};

export default Home;

