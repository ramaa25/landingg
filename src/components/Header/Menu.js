import React from "react";

const Menu = ({ isOpen, className, scroll, setIsOpen }) => {

    const handleClick = (path) => {
        scroll(path)
        isOpen && setIsOpen(false)
    }

    return (
        <div
            className={`absolute md:static flex justify-center align-center gap-1 place-items-center md:rounded-br-3xl w-full bg-[#E0E1DD] z-20 top-0 left-0 flex-col h-full md:flex-row overflow-hidden ease-out transition-transform will-change-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'} ${className}`}
        >
            <span
                onClick={() => handleClick('types')}
                className="p-2 whitespace-nowrap border-b-2 border-semi-dark md:border-none"
            >
                Types
            </span>
            <span
                onClick={() => handleClick('trending')}
                className="p-2 whitespace-nowrap border-b-2 border-semi-dark md:border-none"
            >
                Trending
            </span>
            <span
                onClick={() => handleClick('blogs')}
                className="p-2 whitespace-nowrap border-b-2 border-semi-dark md:border-none"
            >
                Blogs
            </span>
            <span
                onClick={() => handleClick('gallery')}
                className="p-2 whitespace-nowrap border-b-2 border-semi-dark md:border-none"
            >
                Gallery
            </span>
            <span
                onClick={() => handleClick('mobile')}
                className="p-2 whitespace-nowrap border-b-2 border-semi-dark md:border-none"
            >
                Mobile App
            </span>
        </div>
    );
};

export default Menu;
