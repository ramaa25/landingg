import ParfumeKiri from "../img/kiri-parfum.png";
import ParfumeKanan from "../img/kanan-parfum.png";
// import ImgLoad from "./ImgLoad";

const MiddleJumbotron = () => {
    return (
        <div className="lg:col-start-3 lg:col-end-5 absolute lg:static h-[90%] md:h-full lg:row-span-full grid grid-cols-2 grid-rows-4 place-self-center lg:place-self-auto min-[425px]:top-0">
            <div className="row-start-2 col-start-1 col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 relative z-10 brightness-50 lg:brightness-100 sm:gap-40 md:gap-0">
                <div className=" row-span-2 animate-bounce1 place-content-center blur-md lg:blur-none will-change-transform">
                    <img src={ParfumeKiri} alt="parfum" className="object-contain w-full h-full"/>
                </div>
                <div className=" row-span-2 animate-bounce2 place-content-center blur-md lg:blur-none will-change-transform">
                    <img src={ParfumeKanan} alt="parfum" className="object-contain w-full h-full"/>
                </div>
            </div>
            <div className="col-start-1 row-start-1 md:row-start-2 row-span-2 col-span-2 rounded-full bg-radial-gradient relative h-full -z-0"></div>
        </div>
    )
}

export default MiddleJumbotron;