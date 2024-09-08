import Button from "./Button";
import Menu from "./Header/Menu"
import Logo from "../img/logo-food.png"
import { MenuIcon } from "lucide-react";

const Header = () => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full">
            <div className="h-full w-20">
                <img src={Logo} alt="logo" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-semi-dark relative">
                <Menu />
                <div className="flex md:hidden bg-[#E0E1DD] w-full h-full rounded-br-3xl absolute"></div>
            </div>
            <div className="place-content-center grid p-3 rounded-tl-[2rem] rounded-tr-[2rem] bg-semi-dark">
                <Button title="Download App" className={"hidden md:block"} />
                <Button title={<MenuIcon />} className={"md:hidden block"} />
            </div>
        </div>
    )
}

export default Header;