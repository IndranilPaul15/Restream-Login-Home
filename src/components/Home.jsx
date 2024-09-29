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

                <div className="flex-1 flex flex-col bg-[#172b4d] relative">
                    <Navbar setIsOpen={setIsOpen} />
                    <Content />
                    <button className="fixed right-2 bottom-3 transition-transform transform hover:scale-110 bg-slate-700 rounded-full text-gray-300 text-xs p-2 size-12 rounded-full">
                        Need help?
                    </button>


                </div>
            </div>
        </>
    );
};

export default Home;

