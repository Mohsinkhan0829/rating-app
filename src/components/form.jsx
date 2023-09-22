import React, { useEffect, useState } from "react";
const Form = ({saveReview, edit, updateReview})=>{




    const[rating ,setRating] = useState("")
    const[review , setReviews]=useState("")

   const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.editMode){
        updateReview(edit.review.id , rating , review)
    }else{
        saveReview(rating, review)
    }
    setRating("");
    setReviews("");
   };

   useEffect(()=>{
    setRating(edit.review.rating)
    setReviews(edit.review.review)
   },[edit])

   
   
   
    return(
        <form className="p-3" onSubmit={handleSubmit} >
            <select className="form-control rounde-0 my-2" onChange={(e)=>setRating(e.target.value)}
            value={rating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
                <textarea placeholder='Enter Review here' className='form-control rounde-0 my-2' onChange={(e)=>setReviews(e.target.value)}
                required
                value={review}
                ></textarea>
        <button className="btn btn-success rounded-0 w-100 my-2">SAVE</button>
        
        </form>
    )
}

export default Form