import {motion} from 'framer-motion';
import { useState } from 'react';
import image1 from '../assets/miniGallery/image1.jpg';
import image2 from '../assets/miniGallery/image2.jpg';
import image3 from '../assets/miniGallery/image3.jpg';
import image4 from '../assets/miniGallery/image4.jpg';
import image5 from '../assets/miniGallery/image5.jpeg';
import left from '../assets/miniGallery/left-arrow.svg';
import right from '../assets/miniGallery/right-arrow.svg';

export const MiniGallery = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4])
    
    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
          return updatedIndexes;
        });
      };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
          const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
          );
    
          return updatedIndexes;
        });
      };
    
    const images = [image1, image2, image3, image4, image5];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 3 },
        left: { x: "-90%", scale: 0.5, zIndex: 2 },
        right: { x: "90%", scale: 0.5, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 3 },
      };

    return (
        <div className="carousel-grid">
            <div>
            </div>

            <div className="carousel">
            {images.map((image, index) => (
            <motion.img
                key={index}
                src={image}
                alt={image}
                className="rounded-[12px]"
                initial="center"
                animate={positions[positionIndexes[index]]}
                variants={imageVariants}
                transition={{ duration: 0.5 }}
                style={{ width: "40%", position: "absolute" }}
            />
            ))}
            </div>

                
            <div className="carousel-buttons">
                <button 
                    className="back"
                    onClick={handleBack}
                >
                    <img src ={left} ></img>
                </button>
                
                <button
                    className="next"
                    onClick={handleNext}
                >
                    <img src ={right} ></img>
                </button>
            </div>

      </div>
    )
}