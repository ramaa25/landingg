import Section from "./Section";
import Img1 from "../../img/say1.jpg"
import Img2 from "../../img/say2.jpg"
import Img3 from "../../img/say3.jpg"
import { QuoteIcon, ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState, useEffect } from 'react';

const SectionSay = () => {
    const conRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);

    useEffect(() => {
        const updateScrollCount = () => {
            if (conRef.current) {
                // Mengambil lebar item pertama untuk menentukan scrollCount
                const firstChild = conRef.current.firstChild;
                if (firstChild) {
                    setScrollCount(firstChild.clientWidth);
                }
            }
        };

        // Memperbarui scrollCount setelah elemen dirender
        updateScrollCount();

        // Menambahkan event listener untuk memperbarui scrollCount pada perubahan ukuran jendela
        window.addEventListener('resize', updateScrollCount);

        // Cleanup event listener saat component unmount
        return () => window.removeEventListener('resize', updateScrollCount);
    }, []);

    const handleScroll = () => {
        const scrollElement = conRef.current;
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
        const currentScroll = scrollElement.scrollLeft;

        const scrollPercentage = (currentScroll / maxScrollLeft) * 100;
        setScrollProgress(scrollPercentage);
    };

    const scrollLeft = () => {
        if (scrollCount > 0) {
            conRef.current.scrollBy({ left: -scrollCount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollCount > 0) {
            conRef.current.scrollBy({ left: scrollCount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollElement = conRef.current;
        scrollElement.addEventListener('scroll', handleScroll);

        // Cleanup listener saat component unmount
        return () => scrollElement.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <Section>
            <Section
            className="bg-secondary rounded-3xl relative"
            header={
                <h1 className="text-4xl md:text-5xl font-bold p-5 text-center">What They Say</h1>
            }
            >
                <div 
                ref={conRef}
                className="w-full grid grid-cols-[100%_100%_100%] grid-flow-col auto-cols-auto overflow-x-auto snap-mandatory snap-x scroll-smooth no-scrollbar will-change-transform">
                    <div className="flex gap-5 snap-center md:flex-row flex-col">
                        <div className="rounded-2xl overflow-hidden aspect-video w-full md:w-1/2 flex-shrink-0">
                            <img src={Img1} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center md:gap-3">
                            <QuoteIcon className="md:w-20 md:h-20"/>
                            <p className="font-semibold md:text-xl">A woman’s perfume tells more about her than her handwriting.</p>
                            <div className="text-xs md:text-base mt-3">
                                <h1 className="font-bold">Oscar Wilde</h1>
                                <span className="italic">Playwright, poet, and author</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 snap-center md:flex-row flex-col">
                        <div className="rounded-2xl overflow-hidden aspect-video w-full md:w-1/2 flex-shrink-0">
                            <img src={Img2} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center md:gap-3">
                            <QuoteIcon className="md:w-20 md:h-20"/>
                            <p className="font-semibold md:text-xl">No elegance is possible without perfume. It is the unseen, unforgettable, ultimate accessory.</p>
                            <div className="text-xs md:text-base mt-3">
                                <h1 className="font-bold">Coco Chanel</h1>
                                <span className="italic">Fashion designer and businesswoman</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 snap-center md:flex-row flex-col">
                        <div className="rounded-2xl overflow-hidden aspect-video w-full md:w-1/2 flex-shrink-0">
                            <img src={Img3} alt="img" className="object-cover w-full h-full" />
                        </div>
                        <div className="grid place-content-center md:gap-3">
                            <QuoteIcon className="md:w-20 md:h-20"/>
                            <p className="font-semibold md:text-xl">Perfume is the indispensable complement to the personality of women, the finishing touch on a dress.</p>
                            <div className="text-xs md:text-base mt-3">
                                <h1 className="font-bold">Christian Dior</h1>
                                <span className="italic">Fashion designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -right-3 md:right-0 bottom-0 w-[108%] md:w-fit justify-between md:p-10 flex gap-3 h-full md:h-fit items-center">
                        {/* Tombol scroll kiri */}
                        <button
                            onClick={scrollLeft}
                            disabled={scrollProgress === 0}
                            className={`p-2 md:p-3 flex-shrink-0 h-fit outline outline-2 outline-semi-dark rounded-full shadow-lg transition-colors duration-300 order-1 ${scrollProgress === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:outline-none hover:bg-semi-dark hover:text-primary'}`}
                        >
                            <ArrowLeft className="w-2 h-2 md:w-6 md:h-6"/>
                        </button>
                        {/* Tombol scroll kanan */}
                        <button
                            onClick={scrollRight}
                            disabled={scrollProgress === 100}
                            className={`p-2 md:p-3 flex-shrink-0 h-fit outline outline-2 outline-semi-dark rounded-full shadow-lg transition-colors duration-300 order-3 ${scrollProgress === 100 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:outline-none hover:bg-semi-dark hover:text-primary'}`}
                        >
                            <ArrowRight className="w-2 h-2 md:w-6 md:h-6"/>
                        </button>
                    </div>
            </Section>
        </Section>
    )
}

export default SectionSay;