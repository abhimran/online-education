import React from 'react';
import { courseData } from '../../courseData';
import { useState } from 'react';
import Course from '../Course/Course';
import './Shop.css';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [courses] = useState(courseData);
    const [cart, setCart] = useState([]);

    const handleClick = (courses) => {
        const newCart = [...cart, courses];
        setCart(newCart)
    }
    return (
        <div className="shopContainer">
            < div className = "product-container" >
                {
                courses.map(course => <Course course={course} key={course.id} handleClick={handleClick}></Course>)
                }
            </div>
            <div className="shop-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;