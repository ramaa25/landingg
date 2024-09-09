import ButtonArrow from "./ButtonArrow";

const RightJumbotron = () => {
    return (
        <div className="col-start-5 col-span-2 row-span-3 place-content-center lg:place-content-start lg:row-span-1 row-start-1 p-3 lg:row-start-2 text-primary md:flex flex-col gap-5 lg:p-0 lg:px-10 z-10 hidden">
            <h3 className="text-2xl font-bold">Top Variants</h3>
            <p className="text-sm">
            A fragrance is lifeless on its own. The true essence of the perfume comes from you, the creator of its scent.
            </p>
            <ButtonArrow title="Check Our Variants" className={"w-fit"}/>
        </div>
    )
}

export default RightJumbotron;