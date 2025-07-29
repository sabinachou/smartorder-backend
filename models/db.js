require('dotenv').config(); // 讀取 .env 裡的設定
const { Pool } = require('pg'); // 載入 PostgreSQL 客戶端

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

// 確認連線成功
pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => console.error('❌ DB connection error:', err));

module.exports = pool; // 讓其他檔案可以使用這個連線


