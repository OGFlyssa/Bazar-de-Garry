import { useState ,useEffect} from 'react';

export default function BannerAdvertisement({ images, redirectLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [currentIndex, images.length]);

  const handlePrevious = () => {
    const previousIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
    console.log("previous" + previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    console.log("next" + nextIndex);
  };

  const renderImages = () => {
    return images.map((image, index) => {
      return (
        <img
          key={index}
          src={image}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: `${index * window.innerWidth}px`,
            top: 0,
            transition: "transform 0.5s ease-out",
            transform: `translateX(${-window.innerWidth*currentIndex}px)`
          }}
        />
      );
    });
  };

  return (
    <div className='bannerContainer'>
      <div className='banner'>
      {renderImages()}
        <div className='imageIndicatorContainer'>
          {images.map((_, index) => (
            <div key={index} style={index === currentIndex ? activeImageIndicator : imageIndicator} />
          ))}
        </div>
        <button className='prevBtn' onClick={handlePrevious}>Previous</button>
        <button className='nextBtn' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const imageIndicator = {
  height: '10px',
  width: '10px',
  borderRadius: '50%',
  backgroundColor: 'gray',
  margin: '0 5px',
};

const activeImageIndicator = {
  ...imageIndicator,
  backgroundColor: 'white',
};



