import { ArrowUpRight } from "lucide-react";
import Food from "../img/parfume1.jpg"

const JumbotronCollapse = () => {
    return (
        <>
            {/* pojok bawah kanan */}
            <div className="bg-[#E0E1DD] rounded-tl-[3rem] -row-start-2 -col-start-3 col-span-2"></div>
            <div className="-row-start-2 -col-start-3 col-span-2 ml-3 mt-3 relative z-10 ">
                <img src={Food} alt="" className="rounded-[3rem] rounded-tl-[2.5rem] object-cover w-full h-full brightness-50"/>
                <a href="" className="absolute top-0 left-0 inset-0 m-auto w-fit bg-primary h-fit p-3 rounded-full">
                    <ArrowUpRight />
                </a>
            </div>
            <div className="bg-[#E0E1DD] row-start-3 col-start-6"></div>
            <div className="bg-semi-dark row-start-2 row-end-4 col-start-5 col-end-7 rounded-br-[3rem]"></div>
            <div className="bg-[#E0E1DD] row-start-4 col-start-4"></div>
            <div className="bg-semi-dark row-start-3 row-end-5 col-start-3 col-end-5 rounded-br-[3rem] "></div>
        </>
    )
}

export default JumbotronCollapse;