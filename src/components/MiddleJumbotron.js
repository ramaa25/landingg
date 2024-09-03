import ParfumeKiri from "../img/kiri-parfum.png";
import ParfumeKanan from "../img/kanan-parfum.png";

const MiddleJumbotron = () => {
    return (
        <>
            <div className="row-start-2 col-start-3 col-span-2 row-span-2 grid grid-rows-2 grid-cols-2 relative z-10">
                <div className=" row-span-2 animate-bounce1 place-content-center">
                    <img src={ParfumeKiri} alt="parfum" className="object-contain w-full h-full "/>
                </div>
                <div className=" row-span-2 animate-bounce2 place-content-center">
                    <img src={ParfumeKanan} alt="parfum" className="object-contain w-full h-full"/>
                </div>
            </div>
            <div className="col-start-3 row-start-2 row-span-2 col-span-2 rounded-full bg-radial-gradient relative h-full -z-0"></div>
        </>
    )
}

export default MiddleJumbotron;