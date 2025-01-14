const db = require('../config/db');

exports.addReview = async (req, res) => {
  const { itemName, description, contactInfo } = req.body;
  const userId = req.user.uid;

  try {
    const response = await db.insert({
      userId,
      itemName,
      description,
      contactInfo,
      createdAt: new Date(),
    });

    res.status(201).json({ id: response.id, message: 'Review added' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding review', error });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const response = await db.list({ include_docs: true });
    const reviews = response.rows.map(row => row.doc);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};
