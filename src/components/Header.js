import Button from "./Button";
import Menu from "./Header/Menu"
import Logo from "../img/logoo.png"

const Header = () => {
    return (
        <div className="grid grid-cols-[auto_1fr_auto] w-full bg-white">
            <div className="bg-black h-20 w-20">
                <img src={Logo} alt="logo" className="object-cover w-full h-full"/>
            </div>
            <div className="bg-[#374552]">
                <Menu />
            </div>
            <div className="place-content-center grid p-3 rounded-tl-[25px] rounded-tr-[25px] bg-[#374552]">
                <Button title="Download App" />
            </div>
        </div>
    )
}

export default Header;