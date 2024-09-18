import React from 'react'
import Section from './Section'
import ImgLoad from '../ImgLoad'
import Img1 from '../../img/gallery1.jpg'
import Img2 from '../../img/gallery2.jpg'
import Img3 from '../../img/gallery3.jpg'
import Img4 from '../../img/gallery4.jpg'


const SectionGallery = () => {
    return (
        <Section 
            className="relative"
            header={
                <div>
                    <h1 className='text-4xl text-center md:text-5xl font-bold pb-5 md:pb-10'>Gallery</h1>
                </div>
            }
        >
            <div className="absolute -top-10" id='gallery'></div>
            <div className='grid grid-cols-2 gap-2 min-[425px]:gap-3 sm:gap-5 md:gap-10 relative'>   
                <div className="col-span-2 aspect-video rounded-3xl md:col-span-1 md:aspect-square overflow-hidden">
                    <ImgLoad src={Img2} alt="" />
                </div>
                <div className="col-span-1 aspect-video rounded-3xl md:col-span-1 md:self-center overflow-hidden">
                    <ImgLoad src={Img1} alt="" />
                </div>
                <div className="col-span-1 aspect-video rounded-3xl md:col-span-1 overflow-hidden">
                    <ImgLoad src={Img4} alt="" />
                </div>
                <div className="col-span-2 aspect-video rounded-3xl md:col-span-1 md:aspect-square md:-mt-[22%] overflow-hidden">
                    <ImgLoad src={Img3} alt="" />
                </div>
                <svg viewBox="0 0 450 50" className='absolute left-20 fill-transparent stroke-black stroke-[0.5] md:text-5xl font-extrabold -rotate-90 -translate-x-1/2 bottom-1/3 hidden md:block'>
                    <text y="40">Perfume</text>
                </svg>
                <svg viewBox="0 0 450 50" className='absolute -top-1/3 right-20 fill-transparent stroke-black stroke-[0.5] text-5xl font-extrabold -rotate-90 translate-x-1/2 hidden md:block'>
                    <text y="38.5">Nicely</text>
                </svg>
            </div>  
        </Section>
    )
}

export default SectionGallery