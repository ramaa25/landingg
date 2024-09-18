import React from "react";
import Button from "./Button";
import Menu from "./Header/Menu"
import Logo from "../img/logo-food.png"
import { MenuIcon } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if(isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen])

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth', // animasi smooth
            block: 'start' // elemen akan muncul di bagian atas viewport
          });
        }
      }
    
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full px-3 pt-3">
            <div className="h-full w-20">
                <img src={Logo} alt="logo" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-semi-dark relative">
                <Menu isOpen={isOpen} className="hidden md:flex" scroll={scrollToSection}/>
                <div className="flex md:hidden bg-[#E0E1DD] w-full h-full rounded-br-3xl absolute"></div>
            </div>
            <div className="place-content-center grid p-3 rounded-tl-[2rem] rounded-tr-[2rem] bg-semi-dark">
                <Button title="Download App" className={"hidden md:block"} />
                <Button onClick={() => setIsOpen(!isOpen)} title={<MenuIcon className="z-50 relative"/>} className={"md:hidden block"} />
            </div>
            <Menu isOpen={isOpen} className="md:hidden" scroll={scrollToSection} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default Header;