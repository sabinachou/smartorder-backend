const db = require('../models/db');

const getMenuItems = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM menu_items');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { getMenuItems };
