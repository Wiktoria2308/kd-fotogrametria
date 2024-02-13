import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface Image {
    type: string;
    source: string;
}

interface ImagesSliderProps {
    images: Image[];
}

const responsive = {
    desktopWide: {
        breakpoint: {
          max: 2560,
          min: 1421,
        },
        items: 6,
        partialVisibilityGutter: 40,
      },
      laptopM: {
        breakpoint: {
          max: 1420,
          min: 0,
        },
        items: 5,
        partialVisibilityGutter: 40,
      },
      laptopL: {
        breakpoint: {
          max: 1150,
          min: 0,
        },
        items: 4,
        partialVisibilityGutter: 30,
      },
      laptop: {
        breakpoint: {
          max: 940,
          min: 0,
        },
        items: 3,
        partialVisibilityGutter: 30,
      },
      tabletL: {
        breakpoint: {
          max: 750,
          min: 0,
        },
        items: 1.7,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: {
          max: 400,
          min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
      },
};

const ImagesSlider: React.FC<ImagesSliderProps> = ({ images }) => {
    return (
        <div className="images-carousel">
            <h4 className="images-heading">Images</h4>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={false}
                keyBoardControl={true}
                transitionDuration={0}
                containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {images.map((image, index) => (
                    <div className="carousel-card" key={index}>
                        <img
                            src={image.source}
                            alt="image"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImagesSlider;
