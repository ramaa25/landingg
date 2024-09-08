import ButtonArrow from "./ButtonArrow";

const RightJumbotron = () => {
    return (
        <div className="col-start-5 col-span-2 row-span-2 row-start-2 text-primary flex flex-col gap-5 pr-20">
            <h3 className="text-2xl font-bold">Top Variants</h3>
            <p className="text-sm">
            A fragrance is lifeless on its own. The true essence of the perfume comes from you, the creator of its scent.
            </p>
            <ButtonArrow title="Check Our Variants"className={"w-fit"} />
        </div>
    )
}

export default RightJumbotron;