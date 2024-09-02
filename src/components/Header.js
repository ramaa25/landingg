import Button from "./Button";
import Menu from "./Header/Menu"
import Logo from "../img/logo-food.png"

const Header = () => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full">
            <div className="h-full w-20">
                <img src={Logo} alt="logo" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-[#374552] relative">
                <Menu />
                <div className="flex md:hidden bg-[#FFF4F7] w-full h-full rounded-br-3xl absolute"></div>
            </div>
            <div className="place-content-center grid p-3 rounded-tl-[2rem] rounded-tr-[2rem] bg-[#374552]">
                <Button title="Download App" />
            </div>
        </div>
    )
}

export default Header;