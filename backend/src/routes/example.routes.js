import express from 'express';

const router = express.Router();

// Example routes
router.get('/', (req, res) => {
  res.json({ message: 'Example route' });
});

export default router;
