import { useState ,useEffect} from 'react';
const [xPos, setXPos] = useState(0);

export default function BannerAdvertisement({ images, redirectLinks }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(handleNext,2500)
    return () => clearInterval(interval);
  })

  const handlePrevious = () => {
    const previousIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <div style={bannerContainer}>
      <div style={banner}>
        <img src={images[currentIndex]} alt="banner" style={bannerImage} />
        <div style={imageIndicatorContainer}>
          {images.map((_, index) => (
            <div key={index} style={index === currentIndex ? activeImageIndicator : imageIndicator} />
          ))}
        </div>
        <button style={previousButton} onClick={handlePrevious}>Previous</button>
        <button style={nextButton} onClick={handleNext}>Next</button>
      </div>
      <a href={redirectLinks[currentIndex]} style={redirectLink}>Go to page</a>
    </div>
  );
};

const bannerContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30vh',
  width: '100%',
};

const banner = {
  height: '80%',
  width: '80%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
};

const bannerImage = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const imageIndicatorContainer = {
  position: 'absolute',
  bottom: '5%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
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

const previousButton = {
  position: 'absolute',
  left: '5%',
  bottom: '5%',
};

const nextButton = {
  position: 'absolute',
  right: '5%',
  bottom: '5%',
};

const redirectLink = {
  position: 'absolute',
  bottom: '5%',
};


