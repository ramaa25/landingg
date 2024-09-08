import EDT from '../../img/perfumeVar.jpg'
import EDP from '../../img/perfumeVar1.jpg'
import ExDP from '../../img/perfumeVar2.jpg'

const VariantImg = ({variants}) => {
    const variantKind = variants === 'EDT' ? EDT : variants === 'EDP' ? EDP : variants === 'ExDP' ? ExDP : null
    
    return (
        <div className='aspect-video rounded-[3rem] overflow-hidden'>
            <img src={variantKind} alt="img preview" className='w-full h-full'/>
        </div>
    )
}

export default VariantImg;