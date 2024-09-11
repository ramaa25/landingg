import React from 'react'
import EDT_DIOR from '../../img/dior-edt.jpeg'
import EDT_VERSACE from '../../img/versace-edt.jpeg'
import EDP_YVES from '../../img/la-nuit.png'
import EDP_COCO from '../../img/coco-edp.jpg'
import EXDP_TOMFORD from '../../img/tomford.jpg'
import EXDP_AMOUAGE from '../../img/amouge-exdp.jpg'

const VariantMore = ({variants}) => {
    const header1 = variants === 'EDT' ? 'Dior Sauvage EDT' : variants === 'EDP' ? 'La Nuit de L’Homme EDP' : variants === 'ExDP' ? 'Ford Tobacco Vanille ExDP' : null;
    const header2 = variants === 'EDT' ? 'Versace Pour Homme EDT' : variants === 'EDP' ? 'Chanel Coco Mademoiselle EDP' : variants === 'ExDP' ? 'Amouage Interlude Man ExDP' : null;
    const desc1 = variants === 'EDT' ? '4-6 hours' : variants === 'EDP' ? '6-8 hours' : variants === 'ExDP' ? '10-12 hours' : null;
    const desc2 = variants === 'EDT' ? 'Daytime' : variants === 'EDP' ? 'Casual' : variants === 'ExDP' ? 'Nightwear' : null;
    const img1 = variants === 'EDT' ? EDT_DIOR : variants === 'EDP' ? EDP_YVES : variants === 'ExDP' ? EXDP_TOMFORD : null;
    const img2 = variants === 'EDT' ? EDT_VERSACE : variants === 'EDP' ? EDP_COCO : variants === 'ExDP' ? EXDP_AMOUAGE : null;

    const DescRow = ({header, img}) => {
        const Desc = ({desc, title, className}) => {
            return (
                <div className={`flex flex-col gap-2 ${className}`}>
                    <h1>{title}</h1>
                    <span className="font-semibold">{desc}</span>
                </div>
            )
        }
        
        return (
            <div className="bg-semi-dark rounded-[3rem] p-5 px-7 sm:px-10 relative grid grid-rows-[auto_1fr]">
                <div className="overflow-hidden grid place-self-center pb-3 xl:p-0">
                    <h1 className="font-semibold truncate" title={header}>{header}</h1>
                </div>
                <div className="grid grid-cols-2 place-content-center text-center md:text-left md:gap-5 place-self-center w-full">
                    <Desc desc={desc1} title="Longevity" className={'min-[321px]:border-r'}/>
                    <Desc desc={desc2} title="Use" />
                </div>
                <div className="absolute top-0 right-0 h-full grid place-content-center">
                <div className="rounded-full z-10 max-[320px]:w-14 max-[320px]:h-14 w-20 h-20 overflow-hidden translate-x-1/2">
                    <img src={img} alt="" className='w-full h-full object-cover' />
                </div>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-rows-2 md:grid-cols-none gap-5 text-primary w-full text-sm sm:text-base 2xl:text-lg">
            <DescRow header={header1} img={img1}/>
            <DescRow header={header2} img={img2}/>
        </div>
    )
}

export default VariantMore;