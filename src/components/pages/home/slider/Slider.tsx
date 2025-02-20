'use client';

import { useState, useEffect } from 'react';
import styles from './Slider.module.scss';
import img1 from '@/assets/image/fon.png';
import img2 from '@/assets/image/fon2.jpg';
import img3 from '@/assets/image/fon3.jpg';
import Image from 'next/image';

const images = [
  { img: img1 },
  { img: img2 },
  { img: img3 }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
			 <div className={styles.slider}>
      <div className={styles.sliderTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <Image src={image.img} alt={`Slide ${index + 1}`} className={styles.slideImage} />
          </div>
        ))}
      </div>
    </div>
		</div>
  );
};

export default Slider;