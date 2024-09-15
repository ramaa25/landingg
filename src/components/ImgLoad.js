import React, { useState, useEffect } from 'react';

const ImgLoad = ({ src, alt, className }) => {
    const [imageSrc, setImageSrc] = useState(src);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Reset the loading state whenever the variant changes
        setLoading(true);

        const src = imageSrc;

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

    }, [])
    
    return (
        <>
            {loading ? (
                <div className='w-full h-full bg-gray-300 animate-pulse'>
                </div>
            ) : (
                imageSrc ? (
                    <img src={imageSrc} alt={alt} className={`${className} object-cover w-full h-full`}/>
                ) : (
                    <div>No image available</div>
                )
            )}
        </>
        
    )
}

export default ImgLoad