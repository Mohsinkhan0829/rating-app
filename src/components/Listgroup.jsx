import React from 'react';
import Listitem from './Listitem';

const Listgroup = ({ reviews , deleteReview, editReview }) => {
    return (
        <ul className='listgroup my-3 p-2'>{
            reviews.map((review) => (
                <Listitem
                 key={reviews.id}
                 review={review} 
                 deleteReview={deleteReview}
                 editReview={editReview}/>
            ))}
        </ul>
    );
};

export default Listgroup