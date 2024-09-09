import ParfumeKiri from "../img/kiri-parfum.png";
import ParfumeKanan from "../img/kanan-parfum.png";

const MiddleJumbotron = () => {
    return (
        <div className="lg:col-start-3 lg:col-end-5 absolute lg:static row-span-full grid grid-cols-2 grid-rows-4 place-self-center">
            <div className="row-start-2 col-start-1 col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 relative z-10 brightness-50 lg:brightness-100">
                <div className=" row-span-2 animate-bounce1 place-content-center blur-md lg:blur-none">
                    <img src={ParfumeKiri} alt="parfum" className="object-contain w-full h-full filter"/>
                </div>
                <div className=" row-span-2 animate-bounce2 place-content-center blur-md lg:blur-none">
                    <img src={ParfumeKanan} alt="parfum" className="object-contain w-full h-full"/>
                </div>
            </div>
            <div className="col-start-1 row-start-1 md:row-start-2 row-span-2 col-span-2 rounded-full bg-radial-gradient relative h-full -z-0"></div>
        </div>
    )
}

export default MiddleJumbotron;