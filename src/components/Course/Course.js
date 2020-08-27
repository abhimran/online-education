import React from 'react';
import {Button } from 'react-bootstrap';
import './Course.css';
import { useState } from "react";

const Course = (props) => {
   const [buttonText, setButtonText] = useState("Enroll Now");
    const changeText = (text) => setButtonText(text);
    const {name, img, rating, price, author} = props.course;
    return (
        <div className="courseComponent">
            <img src={img} alt="course-img"/>
            <div className="course-detail">
                <h2>{name}</h2>
                <p>Rating: {rating}</p>
                <h1>${price}</h1>
                <p>Created By: {author}</p>
                <Button variant="warning" onClick={()=>{props.handleClick(props.course);changeText("Enrolled")}}>{buttonText}</Button>
            </div>  
       </div>
    );
};

export default Course;