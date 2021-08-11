import React from 'react';

import './Instructor.css';

function Instructor(props) {
    return (
        <div className="instructor">
            <div className="instructor__container">
                <div className="instructor__container--img">
                    <img src={props.data.image} alt="" />
                </div>

                <div className="instructor__container--details">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.role}</p>
                </div>
            </div>
        </div>
    )
}

export default Instructor;