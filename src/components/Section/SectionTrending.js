import React, { useRef, useState, useEffect } from 'react';
import Section from './Section';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';
import Trend1 from '../../img/sec-trending1.jpg'
import Trend2 from '../../img/sec-trending2.jpg'
import Trend3 from '../../img/sec-trending3.jpg'
import Trend4 from '../../img/sec-trending4.jpg'
import Trend5 from '../../img/sec-trending5.jpg'

const SectionTrending = () => {
    const scrollRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [scrollCount, setScrollCount] = useState(0);
    const [loadImg, setLoadImg] = useState(true);

    useEffect(() => {
        const updateScrollCount = () => {
            if (scrollRef.current) {
                // Mengambil lebar item pertama untuk menentukan scrollCount
                const firstChild = scrollRef.current.firstChild;
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
        const scrollElement = scrollRef.current;
        const maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;
        const currentScroll = scrollElement.scrollLeft;

        const scrollPercentage = (currentScroll / maxScrollLeft) * 100;
        setScrollProgress(scrollPercentage);
    };

    const scrollLeft = () => {
        if (scrollCount > 0) {
            scrollRef.current.scrollBy({ left: -scrollCount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollCount > 0) {
            scrollRef.current.scrollBy({ left: scrollCount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        scrollElement.addEventListener('scroll', handleScroll);

        // Cleanup listener saat component unmount
        return () => scrollElement.removeEventListener('scroll', handleScroll);
    }, []);

    const Items = ({bg, desc, header}) => {
        return (
            <div
                className={`bg-gray-300 rounded-3xl flex-none w-[47.5%] sm:w-[31.85%] lg:w-[32.75%] transition-all duration-500 ease-out bg-cover will-change-transform grid overflow-hidden bg-center group relative`}
                style={{ backgroundImage: `${loadImg ? `url(${bg})` : 'none'}` }}
                onLoad={() => setLoadImg(false)}
            >
                <div className="grid auto-rows-min h-1/3 group-hover:h-1/2 md:group-hover:h-1/3 transition-all duration-500 ease-out md:h-1/4 w-full place-self-end text-primary overflow-y-auto p-3 backdrop-brightness-75 overflow-x-hidden gap-1">
                    <h1 className='text-sm md:text-3xl text-center group-hover:text-left transition-all duration-500 font-bold h-10 text-ellipsis overflow-hidden group-hover:h-fit'>{header}</h1>
                    <p className='group-hover:block hidden text-sm md:text-base'>{desc}</p>
                </div>
                <div className="bg-semi-dark transition-all duration-500 top-3 left-3 absolute rounded-full p-1 text-primary flex gap-1 place-items-center overflow-hidden w-6 group-hover:w-28 flex-nowrap whitespace-nowrap no-scrollbar">
                    <Info className="flex-shrink-0" size={15} />
                    <span className='text-[0.6rem] h-fit'>Decorative Image</span>
                </div>
            </div>
        )
    }

    return (
        <Section
            className={'overflow-hidden'}
            header={
                <div className="w-full text-center text-4xl md:text-5xl font-bold p-2 pb-10">
                    <h1>Trending Variants</h1>
                </div>
            }
        >
            <div className="relative no-scrollbar">
                {/* Container scrollable */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll no-scrollbar w-full gap-3 auto-rows-fr h-[25svh] md:h-[50svh]"
                >
                    <Items
                        bg={Trend1}
                        header={"Chanel Bleu de Chanel"}
                        desc={"This perfume is known for its elegant and masculine woody-aromatic scent, perfect for men who want to appear stylish and modern."}
                    />
                    <Items
                        bg={Trend2}
                        header={"Dior Sauvage"}
                        desc={"With its fresh and spicy aroma, Dior Sauvage is a popular choice for men who enjoy bold and energetic scents."}
                    />
                    <Items
                        bg={Trend3}
                        header={"Yves Saint Laurent Black Opium"}
                        desc={"This variant offers an oriental and gourmand aroma with a blend of coffee, vanilla, and floral notes, ideal for women who love intense and seductive fragrances."}
                    />
                    <Items
                        bg={Trend4}
                        header={"Tom Ford Black Orchid"}
                        desc={"This perfume features a complex aroma with luxurious floral and oriental nuances, often chosen by women who prefer dramatic and elegant scents."}
                    />
                    <Items
                        bg={Trend5}
                        header={"Gucci Guilty"}
                        desc={"With its floral and woody fragrance, Gucci Guilty is a popular choice for both men and women who want to make a chic and captivating impression."}
                    />
                </div>
                
                <div className="w-full mt-4 relative flex gap-5">
                    {/* Progress bar */}
                    <div className="w-full h-2 bg-gray-200 mt-4 relative order-2 lg:order-first">
                        <div
                            className="h-2 bg-semi-dark top-0 left-0 will-change-transform"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                    {/* Tombol scroll kiri */}
                    <button
                        onClick={scrollLeft}
                        disabled={scrollProgress === 0}
                        className={`p-3 outline outline-2 outline-semi-dark rounded-full shadow-lg transition-colors duration-300 order-1 ${scrollProgress === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:outline-none hover:bg-semi-dark hover:text-primary'}`}
                    >
                        <ArrowLeft />
                    </button>
                    {/* Tombol scroll kanan */}
                    <button
                        onClick={scrollRight}
                        disabled={scrollProgress === 100}
                        className={`p-3 outline outline-2 outline-semi-dark rounded-full shadow-lg transition-colors duration-300 order-3 ${scrollProgress === 100 ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:outline-none hover:bg-semi-dark hover:text-primary'}`}
                    >
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </Section>
    );
};

export default SectionTrending;
