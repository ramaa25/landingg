import React from 'react'
import EDT_DIOR from '../../img/dior-edt.jpeg'
import EDT_VERSACE from '../../img/versace-edt.jpeg'
import EDP_YVES from '../../img/la-nuit.png'
import EDP_COCO from '../../img/coco-edp.jpg'
import EXDP_TOMFORD from '../../img/tomford.jpg'
import EXDP_AMOUAGE from '../../img/amouge-exdp.jpg'

const VariantMore = ({variants}) => {
    React.useEffect(() => {
        const preloadImages = (sources) => {
          sources.forEach((src) => {
            const img = new Image();
            img.src = src;
          });
        };
    
        // Memuat semua gambar ke dalam cache
        preloadImages([
          EDT_DIOR,
          EDT_VERSACE,
          EDP_YVES,
          EDP_COCO,
          EXDP_TOMFORD,
          EXDP_AMOUAGE
        ]);
      }, []);
    
    
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
            <div className="bg-semi-dark rounded-[3rem] p-5 px-10 relative">
                <div className="overflow-hidden grid">
                    <h1 className="font-semibold truncate" title={header}>{header}</h1>
                </div>
                <div className="grid grid-cols-2 place-content-center gap-5 mt-5">
                    <Desc desc={desc1} title="Longevity" className={'border-r'}/>
                    <Desc desc={desc2} title="Use" />
                </div>
                <div className="absolute rounded-full z-10 top-0 right-0 w-20 h-20 overflow-hidden translate-y-1/2 translate-x-1/2">
                    <img src={img} alt="" className='w-full h-full object-cover'/>
                </div>
            </div>
        )
    }

    return (
        <div className="grid grid-rows-2 gap-5 text-primary">
            <DescRow header={header1} img={img1}/>
            <DescRow header={header2} img={img2}/>
        </div>
    )
}

export default VariantMore;