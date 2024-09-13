import { ArrowUpRight } from "lucide-react";

const ButtonArrow = ({ title, className}) => {
    return (
        <button className={`text-dark rounded-full grid grid-flow-col relative ${className}`}>
            <span className="bg-primary px-5 py-3 rounded-full z-10 truncate">{title}</span>
            <span className=" relative w-3 h-full">
                    <span className="bg-semi-dark w-[16.75px] h-5 rounded-b-full absolute -left-[20.5%] z-10"></span>
                    <span className="bg-primary w-5 h-5 absolute -left-[20.5%] inset-0 m-auto"></span>
                    <span className="bg-semi-dark w-[16.75px] h-5 rounded-t-full place-self-end absolute -left-[20.5%] z-10 bottom-0"></span>
            </span>
            <span className="bg-primary p-3 rounded-full z-10">
                <ArrowUpRight />
            </span>
        </button>
    )
}

export const ButtonArrowBlog = ({ title, className}) => {
    return (
        <button className={`text-dark rounded-full flex relative ${className}`}>
            <span className="bg-semi-dark px-5 py-3 rounded-full z-10 truncate text-sm h-full self-center md:text-base">{title}</span>
            <span className=" relative w-3 h-full">
                    <span className="bg-primary w-[16.75px] h-5 rounded-b-full absolute -left-[20.5%] z-10"></span>
                    <span className="bg-semi-dark w-5 h-5 absolute -left-[20.5%] inset-0 m-auto"></span>
                    <span className="bg-primary w-[16.75px] h-5 rounded-t-full place-self-end absolute -left-[20.5%] z-10 bottom-0"></span>
            </span>
            <span className="bg-semi-dark p-3 rounded-full z-10">
                <ArrowUpRight className="text-primary"/>
            </span>
        </button>
    )
}

export default ButtonArrow;