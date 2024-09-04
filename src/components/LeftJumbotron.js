import ButtonArrow from "./ButtonArrow";
import ImgJumbotronVar from "./ImgJumbotronVar";

const LeftJumbotron = () => {
    return (
        <div className="row-span-4 col-span-2 grid grid-rows-4 pl-10">
            <div className="row-span-3 place-self-center grid gap-5 text-primary">
                <div className="text-5xl font-extrabold">
                    <h1 className="">Discover Simple,</h1>
                    <h1 className="">Inexpensive</h1>
                    <h1 className=" text-red-800">Long Fragnance!</h1>
                </div>
                <div className="">
                    <h1 className="">
                        A fragrance is just a blend. The true essence of it comes alive with your spirit.
                    </h1>
                </div>
                <div className="">
                    <ButtonArrow title="Read More" />
                </div>
            </div>
            <div className="grid gap-3">
                <div className="grid grid-cols-5">
                    <ImgJumbotronVar />
                </div>
                    <span className="w-full">
                        500+ Variants
                    </span>
            </div>
        </div>
    )
}

export default LeftJumbotron;