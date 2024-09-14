import JumbotronCollapse from "./JumbotronCollapse";
import LeftJumbotron from "./LeftJumbotron";
import MiddleJumbotron from "./MiddleJumbotron";
import RightJumbotron from "./RightJumbotron";


const Jumbotron = () => {
    return (
        <div className="px-3">
            <div className="h-[90svh] w-full bg-semi-dark rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] grid grid-cols-6 grid-rows-4 mb-10 overflow-hidden relative">
                <JumbotronCollapse />
                <MiddleJumbotron />
                <LeftJumbotron />
                <RightJumbotron />
            </div>
        </div>
    )
}

export default Jumbotron;