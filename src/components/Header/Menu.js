import React from "react";

const Menu = ({isOpen, className}) => {
    return (
        <div className={`absolute md:static flex justify-center align-center gap-1 place-items-center md:rounded-br-3xl w-full bg-[#E0E1DD] z-20 top-0 left-0 flex-col h-full md:flex-row overflow-hidden ease-out transition-transform will-change-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'} ${className}`}>
            <div className="p-2 whitespace-nowrap">Home</div>
            <div className="p-2 whitespace-nowrap">Mobile App</div>
            <div className="p-2 whitespace-nowrap">Variants</div>
            <div className="p-2 whitespace-nowrap">Blogs</div>
            <div className="p-2 whitespace-nowrap">Gallery</div>
        </div>
    )
}

export default Menu;