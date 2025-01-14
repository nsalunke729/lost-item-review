import { useState } from 'react';
import axios from 'axios';
import { auth } from '../firebase';

function ReviewForm() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await auth.currentUser.getIdToken();

    try {
      await axios.post('http://localhost:5000/api/reviews', {
        itemName,
        description,
        contactInfo,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Review submitted');
    } catch (error) {
      console.error(error);
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Contact Info" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
