import { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <div key={review._id}>
          <h3>{review.itemName}</h3>
          <p>{review.description}</p>
          <p>Contact: {review.contactInfo}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
