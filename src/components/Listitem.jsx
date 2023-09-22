import React from 'react';

const Listitem = ({review , deleteReview, editReview}) => {
    return (
        <div>
            <li className='list-group-item rounded-0 shadow-lg p-5 my-2'>
                <h1 className='display-5'>Rating:{review.rating}</h1>
                <h1 className='display-6'>Review:{review.review}</h1>
                <button className='btn btn-danger btn-sm rounded-0 float-end' onClick={()=>deleteReview(review.id)}>Delete</button>
                <button className='btn btn-warning btn-sm rounded-0 float-end' onClick={()=>editReview(review)}>Edit</button>

            </li>
        </div>
    )
}
export default Listitem