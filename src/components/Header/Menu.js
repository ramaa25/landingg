const Menu = ({isOpen}) => {
    return (
        <div className={`absolute md:static flex justify-center align-center gap-1 place-items-center md:rounded-br-3xl w-full bg-[#E0E1DD] z-20 top-0 left-0 flex-col md:flex-row overflow-hidden transition-[height] duration-300 ease-linear ${isOpen ? 'h-full' : 'h-0 md:h-full'}`}>
            <div className="p-2 whitespace-nowrap">Home</div>
            <div className="p-2 whitespace-nowrap">Mobile App</div>
            <div className="p-2 whitespace-nowrap">Variants</div>
            <div className="p-2 whitespace-nowrap">Blogs</div>
            <div className="p-2 whitespace-nowrap">Gallery</div>
        </div>
    )
}

export default Menu;