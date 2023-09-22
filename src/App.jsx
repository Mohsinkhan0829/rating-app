import Navbar from './components/Navbar';
import Form from './components/form'
import Listgroup from './components/Listgroup';
import { useState } from 'react';

const App = () => {

  const [reviews, setReviews] = useState([]);
  const [edit , setEdit]= useState({
    review:{},
    editMode: false,
  });

  // Delete review

  const deleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }
  //  Sava review

  const saveReview = (rating, review) => {
    const newReview = {
      id: crypto.randomUUID(),
      rating,
      review,
    }
    setReviews([newReview, ...reviews])
  }

  // edit Review
  const editReview = (oldReview) => {
    setEdit({
      review :oldReview,
      editMode : true,
    })
  }

  const updateReview = (oldId , newRating , newReview)=>{
    setReviews(
      reviews.map((review) => review.id === oldId
      ? {...review, rating: newRating , review: newReview}
      :review)
      );
      setEdit({review:{},editMode:false})
  };

 

  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <h1 className='display-4 text-center'>Rating App</h1>
      </div>

      <Form saveReview={saveReview} edit={edit} updateReview={updateReview} />

      <Listgroup
       reviews={reviews}
        deleteReview={deleteReview}
         editReview={editReview} />
    </>
  );
}

export default App