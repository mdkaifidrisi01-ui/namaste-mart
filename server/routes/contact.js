import { Router } from 'express';
import Contact from '../models/Contact.js';

const router = Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });
  const doc = await Contact.create({ name, email, message });
  res.status(201).json(doc);
});

export default router;
