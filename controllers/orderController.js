const db = require('../models/db');

const placeOrder = async (req, res) => {
  const items = req.body.items;

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Invalid order items' });
  }

  try {
    // 建立新訂單，取得訂單 ID
    const orderResult = await db.query('INSERT INTO orders DEFAULT VALUES RETURNING id');
    const orderId = orderResult.rows[0].id;

    // 對每一個項目，寫入 order_items 表
    for (const item of items) {
      await db.query(
        'INSERT INTO order_items (order_id, menu_item_id, quantity) VALUES ($1, $2, $3)',
        [orderId, item.productId, item.quantity]
      );
    }

    res.json({ orderId, status: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { placeOrder };
