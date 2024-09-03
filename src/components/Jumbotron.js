import JumbotronCollapse from "./JumbotronCollapse";
import LeftJumbotron from "./LeftJumbotron";
import MiddleJumbotron from "./MiddleJumbotron";


const Jumbotron = () => {
    return (
        <div className="h-full w-full bg-[#1B263B] rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] grid grid-cols-6 grid-rows-4 mb-10">
            <JumbotronCollapse />
            <MiddleJumbotron />
            <LeftJumbotron />
        </div>
    )
}

export default Jumbotron;