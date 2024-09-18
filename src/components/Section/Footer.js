import ImgLoad from "../ImgLoad";
import Logo from "../../img/logo-food.png";
import { Facebook, Instagram } from "lucide-react";
import App1 from "../../img/app1.png";
import App2 from "../../img/app2.png";
import PlayStore from "../../img/playstore.png";
import AppStore from "../../img/appsotre.png";


const Footer = () => {
    const FooterData = [
        {
            header: "Companies",
            a1: "Proffesions",
            a2: "How We Compare",
            a3: "Team Members",
        },
        {
            header: "Quick Links",
            a1: "Home",
            a2: "About Us",
            a3: "Blogs",
        },
        {
            header: "Support",
            a1: "FAQ",
            a2: "How It Works",
            a3: "Privacy & Policy",
        },
        {
            header: "Credits",
            a1: "Design",
            a2: "Logo Types",
        },
    ]
    
    return (
        <div className="bg-semi-dark h-fit rounded-t-[3.5rem] mt-80 relative px-7 md:px-10 flex flex-col gap-5">
            <div className="w-3/4 h-fit md:h-2/3 xl:h-3/4 -top-[22.5%] md:-top-1/2 left-[12.5%] min-[600px]:-top-[10%] bg-secondary absolute rounded-[2.5rem] flex flex-col lg:flex-row md:px-10 ">
                <div className="flex flex-col gap-3">
                    <div className="flex p-5 flex-col gap-5 relative z-10">
                        <h1 className="font-bold text-2xl">Download Our App</h1>
                        <p>When you sign with us, you must receive a discount and a promotical offer from us</p>
                    </div>
                    <AppDownloadButtons />
                </div>
                <div className="md:justify-around w-full bottom-0 left-0 -z-0 lg:flex hidden">
                    <div className="object-contain">
                        <ImgLoad src={App1} alt="app1" className="rounded-3xl brightness-50 scale-125 lg:-translate-y-10"/>
                    </div>
                    <div className="object-contain">
                        <ImgLoad src={App2} alt="app2" className="rounded-3xl brightness-50 scale-125 lg:-translate-y-10"/>
                    </div>
                </div>
            <div className="absolute -top-10 h-5 w-5" id="mobile"></div>
            </div>
            <div className="flex flex-col md:flex-row pt-40 md:pt-32 gap-10 relative text-primary">
                <div className="flex flex-col gap-3 md:w-1/3">
                    <div className="w-20">
                        <ImgLoad src={Logo} alt="logo" className="invert" />
                    </div>
                    <p>Landing page for my portofolio 🐔</p>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/ahmad.ramadhani.923724/" className="border-2 border-primary rounded-full p-2 ">
                            <Facebook className="w-5 h-5"/>
                        </a>
                        <a href="https://www.instagram.com/tuturammm/" className="border-2 border-primary rounded-full p-2 ">
                            <Instagram className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
                <div className="flex gap-5 max-[350px]:flex-col flex-wrap justify-between md:flex-nowrap md:justify-normal w-full">
                    {FooterData.map((data, i) => <SectionFooter key={i} header={data.header} a1={data.a1} a2={data.a2} a3={data.a3} />)}
                </div>
            </div>
            <hr />
            <p className="text-center text-primary pb-5 font-extralight text-sm">@tuturam, 2024. All Rights Reserved.</p> 

        </div>
    )
}

const SectionFooter = ({header, a1, a2, a3}) => {
    return (
        <div className="flex flex-col gap-2 md:gap-3 w-1/3">
            <h1 className="font-bold">{header}</h1>
            {
                header !== "Credits" ? 
                <>
                    <span className="font-light">{a1}</span>
                    <span className="font-light">{a2}</span>
                    <span className="font-light">{a3}</span>
                </>
                 : 
                 <>
                    <a className="font-light" href="https://dribbble.com/shots/21365759-Food-Recipe-Landing-Page-Design">{a1}</a>
                    <a className="font-light" href="https://www.flaticon.com/free-icons/perfume">{a2}</a>
                 </>
            }
        </div>
    )
}

const AppDownloadButtons = () => {
    return (
      <div className="flex items-center rounded-lg flex-col sm:flex-row gap-3 pb-5 w-full justify-center">
        {/* Google Play Button */}
        <button className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition w-fit">
          <div className="w-7 h-7">
              <ImgLoad src={PlayStore} alt="playstore" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs sm:text-sm flex-shrink-0 whitespace-nowrap">Get it on</span>
            <span className="text-medium font-bold flex-shrink-0 whitespace-nowrap">Google Play</span>
          </div>
        </button>
  
        {/* App Store Button */}
        <button className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition w-fit">
            <div className="w-10 h-10">
                <ImgLoad src={AppStore} alt="appstore" />
            </div>
          <div className="flex flex-col items-start ">
            <span className="text-xs sm:text-sm flex-shrink-0 whitespace-nowrap">Download on the</span>
            <span className="text-medium font-bold flex-shrink-0 whitespace-nowrap">App Store</span>
          </div>
        </button>
      </div>
    );
  };
  

export default Footer;