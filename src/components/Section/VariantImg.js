import React, { useState, useEffect } from 'react';
import EDT from '../../img/perfumeVar.jpg';
import EDP from '../../img/perfumeVar1.jpg';
import ExDP from '../../img/perfumeVar2.jpg';

const VariantImg = ({ variants }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reset the loading state whenever the variant changes
        setLoading(true);

        // Determine the image source based on the variant
        const getImageSrc = () => {
            switch (variants) {
                case 'EDT':
                    return EDT;
                case 'EDP':
                    return EDP;
                case 'ExDP':
                    return ExDP;
                default:
                    return null;
            }
        };

        const src = getImageSrc();

        // If there's no valid image source, stop loading
        if (!src) {
            setLoading(false);
            return;
        }

        // Preload the image
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setLoading(false); // Image loaded successfully
        };
        img.onerror = () => {
            setLoading(false); // Handle error case
        };

    }, [variants]); // Re-run effect when `variants` changes

    return (
        <div className='aspect-video rounded-[3rem] overflow-hidden my-auto'>
            {loading ? (
                <div className='w-full h-full bg-gray-300 animate-pulse'>
                </div> // Display loading indicator while image is loading
            ) : (
                imageSrc ? (
                    <img src={imageSrc} alt="img preview" className='w-full h-full'/>
                ) : (
                    <div>No image available</div>
                )
            )}
        </div>
    );
};

export default VariantImg;
