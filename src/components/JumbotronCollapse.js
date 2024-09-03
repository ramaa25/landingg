import Food from "../img/parfume1.jpg"

const JumbotronCollapse = () => {
    return (
        <>
            {/* pojok bawah kanan */}
            <div className="bg-[#E0E1DD] rounded-tl-[3rem] -row-start-2 -col-start-3 col-span-2"></div>
            <div className="-row-start-2 -col-start-3 col-span-2 pl-3 pt-3">
                <img src={Food} alt="" className="rounded-[3rem] rounded-tl-[2.5rem] object-cover w-full h-full"/>
            </div>
            <div className="bg-[#E0E1DD] row-start-3 col-start-6"></div>
            <div className="bg-[#1B263B] row-start-3 col-start-6 rounded-br-[3rem]"></div>
            <div className="bg-[#E0E1DD] row-start-4 col-start-4"></div>
            <div className="bg-[#1B263B] row-start-4 col-start-4 rounded-br-[3rem]"></div>
        </>
    )
}

export default JumbotronCollapse;