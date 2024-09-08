import Logo1 from "../img/parfum-jumbotron1.jpg"
import Logo2 from "../img/parfum-jumbotron2.jpg"
import Logo3 from "../img/parfum-jumbotron3.jpg"
import Logo4 from "../img/parfum-jumbotron4.jpg"
import Logo5 from "../img/parfum-jumbotron5.jpg"

const ImgJumbotronVar = () => {
    return (
        <>
            <div className="w-20 h-20 rounded-full overflow-hidden border-white border-2">
                <img src={Logo1} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden border-white border-2 -translate-x-5">
                <img src={Logo2} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden border-white border-2 -translate-x-10">
                <img src={Logo3} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden border-white border-2 -translate-x-[4rem]">
                <img src={Logo4} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="w-20 h-20 rounded-full overflow-hidden border-white border-2 -translate-x-[6rem]">
                <img src={Logo5} alt="" className="object-cover w-full h-full" />
            </div>
        </>
    )
}

export default ImgJumbotronVar;