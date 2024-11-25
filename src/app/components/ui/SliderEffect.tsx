import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Props {
    images: string[];

}

export const Slideshow = ({ images }: Props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div className="slideshow">
            <Image width={200} height={200} src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </div>
    );
};