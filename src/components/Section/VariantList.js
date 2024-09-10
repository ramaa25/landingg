import React from 'react';
import EDT from '../../img/perfume.png'
import EDP from '../../img/perfume (1).png'
import ExDP from '../../img/parfum2.png'

const VariantList = ({variants, setVariants}) => {
    const Listing = ({logo, desc}) => {
        return (
            <div 
            className={
                `flex rounded-full border-secondary border-2 p-2 gap-3 md:gap-5 items-center font-semibold ${variants === desc ? 'bg-semi-dark text-white' : 'bg-transparent'} hover:cursor-pointer`
            }
                onClick={() => setVariants(desc)}
            >
                <div className={`w-8 h-8 md:w-10 md:h-10 p-2 rounded-full overflow-hidden flex-shrink-0 ${variants === desc ? 'bg-white' : 'bg-semi-dark'}`}>
                    <img src={logo} alt="edt" className={`w-full h-full aspect-[4/4]  ${variants === desc ? 'invert-0' : 'invert'}`}/>
                </div>
                <span className="text-sm md:text-base">
                    {desc}
                </span>
            </div>
        )
    }
    
    return (
        <div className='flex md:flex-col gap-1 md:gap-3 justify-center place-self-start md:place-self-auto flex-wrap w-full'>
            <Listing logo={EDT} desc="EDT"/>
            <Listing logo={EDP} desc="EDP"/>
            <Listing logo={ExDP} desc="ExDP"/>
        </div>
    )
}

export default VariantList;