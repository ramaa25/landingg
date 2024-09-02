import JumbotronCollapse from "./JumbotronCollapse";


const Jumbotron = () => {
    return (
        <div className="h-full w-full bg-[#374552] rounded-tl-[3rem] rounded-bl-[3rem] rounded-br-[3rem] grid grid-cols-3 grid-rows-3 mb-10">
            <JumbotronCollapse />
        </div>
    )
}

export default Jumbotron;