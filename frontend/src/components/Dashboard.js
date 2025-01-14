// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddItem from './AddItem';  // Import AddItem

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getItems');
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <AddItem />  {/* Add the AddItem form here */}
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><em>{new Date(item.dateAdded).toLocaleString()}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
