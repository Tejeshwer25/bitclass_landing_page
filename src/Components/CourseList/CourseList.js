import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import CourseItem from './CourseItem';

import "./CourseList.css";


function CourseList(props) {

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
        <div className="courseList">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
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
                {props.data.map(item => <CourseItem data={item} key={item.id}/>)}
            </Carousel>
        </div>
    )
}

export default CourseList;