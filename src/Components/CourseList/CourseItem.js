import React from 'react'

import sketch from '../../Images/sketch.jfif';

import "./CourseItem.css";

function CourseItem(props) {
    console.log(props)
    return (
        <div className="courseItem"> 
            <div className="courseItem__container">
                <div className="courseItem__container--img">
                    <span>💖{props.data.rating}</span>
                    <img src={sketch} alt="" />
                </div>

                <div className="courseItem__container--detail">
                    {props.data.live ? <div className="courseItem__container--detail__status">LIVE</div>: <div style={{height: '25px'}}></div>}

                    <div className="courseItem__container--detail__name">{props.data.course_name}</div>

                    <div className="courseItem__container--detail__instructor">
                        <p>Taught By <br/><span>{props.data.taught_by}</span></p>
                        <button>+ follow</button>
                    </div>

                    <div className="courseItem__container--detail__link">
                        Watch now for {props.data.cost}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseItem;