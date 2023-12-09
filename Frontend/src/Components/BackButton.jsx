import React from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='m-8 text-6xl '>
            <Link to={destination}>
                <IoArrowBackCircleOutline className='text-5xl -mb-22'/>
            </Link>
        </div>
    )
}

export default BackButton