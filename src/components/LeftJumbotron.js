import ButtonArrow from "./ButtonArrow";
import ImgJumbotronVar from "./ImgJumbotronVar";

const LeftJumbotron = () => {
    return (
        <div className="col-span-full row-span-full md:col-start-1 md:col-end-5 lg:row-span-4 lg:col-span-2 grid grid-rows-5 lg:p-10 xl:pl-20 text-primary z-10">
            <div className="row-span-4 md:row-span-3 grid gap-5 place-content-center max-[380px]:p-8 p-10 lg:p-0 lg:pt-10">
                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl whitespace-nowrap font-extrabold flex flex-col gap-2 w-full">
                    <h1 className="">Discover Simple,</h1>
                    <h1 className="">Inexpensive &</h1>
                    <h1 className=" text-red-800">Long Fragnance!</h1>
                </div>
                <div className="">
                    <h1 className="">
                        A fragrance is just a blend. The true essence of it comes alive with your spirit.
                    </h1>
                </div>
                <div className="h-full min-[425px]:w-fit min-[425px]:m-auto md:w-full md:m-0">
                    <ButtonArrow title="Read More" className={"mt-5"}/>
                </div>
            </div>
            <div className="grid row-span-1 md:row-span-2 lg:row-span-2 grid-rows-[1fr_auto] gap-3 md:place-content-end md:mt-auto md:w-fit md:h-fit max-[380px]:pl-8 pl-10 lg:p-0 sm:-mt-5 md:m-0">
                <ImgJumbotronVar />
                <span className="mb-10 lg:m-0">
                    500+ Variants
                </span>
            </div>
        </div>
    )
}

export default LeftJumbotron;