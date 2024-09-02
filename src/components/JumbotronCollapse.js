import Food from "../img/foods1.jpg"

const JumbotronCollapse = () => {
    return (
        <>
            {/* pojok bawah kanan */}
            <div className="bg-[#FFF4F7] rounded-tl-[3rem] -row-start-2 -col-start-2"></div>
            <div className="-row-start-2 -col-start-2 pl-3 pt-3">
                <img src={Food} alt="" className="rounded-[3rem] rounded-tl-[2.5rem] object-cover w-full h-full"/>
            </div>
            <div className="bg-[#FFF4F7] row-start-2 col-start-3"></div>
            <div className="bg-[#374552] row-start-2 col-start-3 rounded-br-[3rem]"></div>
            <div className="bg-[#FFF4F7] row-start-3 col-start-2"></div>
            <div className="bg-[#374552] row-start-3 col-start-2 rounded-br-[3rem]"></div>
        </>
    )
}

export default JumbotronCollapse;