import Section from "./Section"

const SectionTrending = () => {
    return (
        <Section
            className={'overflow-hidden'}
            header={
                <div className="w-full text-center text-5xl font-bold p-2">
                    <h1>Trending Variants</h1>
                </div>
            }
        >
        <div id="container">
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
        </div>
        </Section>
    )
}

export default SectionTrending;