import React from "react";
import Button from "./Button";
import Menu from "./Header/Menu"
import Logo from "../img/logo-food.png"
import { MenuIcon } from "lucide-react";
import useScreenSize from "./useScreenSize";

const Header = () => {
    const screenSize = useScreenSize();
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen])
    
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full ">
            <div className="h-full w-20">
                <img src={Logo} alt="logo" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-semi-dark relative">
                {screenSize.width >= 768 && <Menu />}
                <div className="flex md:hidden bg-[#E0E1DD] w-full h-full rounded-br-3xl absolute"></div>
            </div>
            <div className="place-content-center grid p-3 rounded-tl-[2rem] rounded-tr-[2rem] bg-semi-dark">
                <Button title="Download App" className={"hidden md:block"} />
                <Button onClick={() => setIsOpen(!isOpen)} title={<MenuIcon className="z-50 relative"/>} className={"md:hidden block"} />
            </div>
            {screenSize.width < 768 && <Menu isOpen={isOpen} />}
        </div>
    )
}

export default Header;