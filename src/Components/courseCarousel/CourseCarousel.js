import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import "./CourseCarousel.css";

function CourseCarousel(props) {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: props.screen.largeDesktop
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: props.screen.desktop
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: props.screen.tablet
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: props.screen.mobile
        }
      };

    return (
        <div className="courseCarousel">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              
              {props.data.map(item => <div className="courseCarousel__itemOne">
                                        <img src={item} alt=""/>
                                      </div>
              )}
                
            </Carousel>
        </div>
    )
}

export default CourseCarousel;