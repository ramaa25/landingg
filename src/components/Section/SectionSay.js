import Section from "./Section";
import Img1 from "../../img/say1.jpg"
import Img2 from "../../img/say2.jpg"
import Img3 from "../../img/say3.jpg"
import { QuoteIcon } from "lucide-react";

const SectionSay = () => {
    return (
        <Section>
            <Section
            className="bg-secondary rounded-3xl"
            header={
                <h1 className="text-4xl md:text-5xl font-bold p-5 text-center">What They Say</h1>
            }
            >
                <div className="w-full grid grid-cols-[100%_100%_100%] grid-flow-col auto-cols-auto overflow-x-auto snap-mandatory snap-x scroll-smooth no-scrollbar">
                    <div className="flex gap-5 snap-center">
                        <div className="rounded-2xl overflow-hidden aspect-video w-1/2 flex-shrink-0">
                            <img src={Img1} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center gap-3">
                            <QuoteIcon size={50}/>
                            <p className="font-semibold text-xl">A woman’s perfume tells more about her than her handwriting.</p>
                            <div className="">
                                <h1 className="font-bold">Oscar Wilde</h1>
                                <span className="italic">Playwright, poet, and author</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 snap-center">
                        <div className="rounded-2xl overflow-hidden aspect-video w-1/2 flex-shrink-0">
                            <img src={Img2} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center gap-3">
                            <QuoteIcon />
                            <p className="font-semibold text-xl">No elegance is possible without perfume. It is the unseen, unforgettable, ultimate accessory.</p>
                            <div className="">
                                <h1 className="font-bold">Coco Chanel</h1>
                                <span className="italic">Fashion designer and businesswoman</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 snap-center">
                        <div className="rounded-2xl overflow-hidden aspect-video w-1/2 flex-shrink-0">
                            <img src={Img3} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center gap-3">
                            <QuoteIcon />
                            <p className="font-semibold text-xl">Perfume is the indispensable complement to the personality of women, the finishing touch on a dress.</p>
                            <div className="">
                                <h1 className="font-bold">Christian Dior</h1>
                                <span className="italic">Fashion designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </Section>
    )
}

export default SectionSay;