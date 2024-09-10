import React, { useState, useEffect } from "react";
import Logo1 from "../img/parfum-jumbotron1.jpg";
import Logo2 from "../img/parfum-jumbotron2.jpg";
import Logo3 from "../img/parfum-jumbotron3.jpg";
import Logo4 from "../img/parfum-jumbotron4.jpg";
import Logo5 from "../img/parfum-jumbotron5.jpg";
import { Loader2Icon } from "lucide-react";

const ImgJumbotronVar = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        const logoAll = [Logo1, Logo2, Logo3, Logo4, Logo5];
        const preloadImages = async (sources) => {
            const imagePromises = sources.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve(src);
                    img.onerror = () => resolve(src); // Resolve even on error to avoid hanging
                });
            });

            const loadedImages = await Promise.all(imagePromises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        preloadImages(logoAll);
    }, []);

    return (
        <div className="grid grid-flow-col-dense gap-0 place-items-center w-fit max-[375px]:place-content-center">
            {imagesLoaded ? (
                images.map((image, index) => (
                    <div
                        key={index}
                        className={`w-14 h-14 min-[420px]:w-16 min-[420px]:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white relative ${
                            index !== 0 ? "-ml-8" : ""
                        }`}
                    >
                        <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))
            ) : (
                <Loader2Icon className="animate-spin place-self-center"/>
            )}
        </div>
    );
};

export default ImgJumbotronVar;
