import ImgLoad from "../ImgLoad"
import Section from "./Section"
import Img1 from "../../img/blog1.jpg"
import Img2 from "../../img/blog2.jpg"
import { ButtonArrowBlog } from "../ButtonArrow"

const SectionBlog = () => {

    const Blogs = ({src, head, paraf, className}) => {
        return (
            <div className={`flex flex-col gap-3 overflow-hidden flex-shrink-0 md:w-1/2 ${className}`}>
                <div className="rounded-3xl overflow-hidden h-full bg-black">
                    <ImgLoad src={src} alt="img" className="aspect-video" />
                </div>
                <div className="flex flex-col md:gap-1">
                    <h1 className="font-semibold md:text-xl lg:text-3xl">{head}</h1>
                    <p className="font-light md:truncate lg:text-md">{paraf}</p>
                    <a href="./" className="border-b-gray-500 border-b-2 w-fit text-gray-800 tracking-wide text-sm md:text-lg mt-2 font-[500]">
                        Read More
                    </a>
                </div>
            </div>
        )
    }
    
    return (
        <Section
            header={
                <div className="p-5 text-3xl md:text-5xl font-bold text-center md:pb-10 relative">
                    <div className="absolute -top-5" id='blogs'></div>
                    <h1>Our Blog</h1>
                </div>
            }
        >
            <div className="flex flex-col md:flex-row gap-5 ">
                <Blogs 
                    src={Img1}
                    head="Discover the Essence of Jasmine"
                    paraf="Experience the rich, floral tones that transport you to a garden in full bloom."
                />
                <Blogs 
                    src={Img2}
                    head="A Scent for Every Occasion"
                    paraf="Our versatile range of fragrances is perfect for every mood and moment."
                />
            </div>
            <div className="grid place-content-center my-3">
                <ButtonArrowBlog title="More Blogs" className={"w-fit mt-5 text-primary"}/>
            </div>

        </Section>
    )
}


export default SectionBlog