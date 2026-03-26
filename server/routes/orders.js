import { Router } from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { authRequired, adminOnly } from '../middleware/auth.js';

const router = Router();

// Create order
router.post('/', authRequired, async (req, res) => {
  const { items, shippingAddress } = req.body;
  if (!Array.isArray(items) || !items.length) return res.status(400).json({ message: 'Items required' });

  // compute total and validate stock
  let total = 0;
  for (const it of items) {
    const p = await Product.findById(it.product);
    if (!p) return res.status(400).json({ message: 'Invalid product' });
    if (p.stock < it.qty) return res.status(400).json({ message: `Insufficient stock for ${p.title}` });
    total += p.price * it.qty;
  }
  const order = await Order.create({
    user: req.user.id,
    items: items.map(i => ({ product: i.product, qty: i.qty, price: i.price || undefined })),
    total,
    shippingAddress
  });
  res.status(201).json(order);
});

// My orders
router.get('/mine', authRequired, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 }).populate('items.product');
  res.json(orders);
});

// Admin list
router.get('/', authRequired, adminOnly, async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 }).populate('user', 'name email');
  res.json(orders);
});

// Admin update status
router.patch('/:id/status', authRequired, adminOnly, async (req, res) => {
  const { status } = req.body;
  const o = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!o) return res.status(404).json({ message: 'Not found' });
  res.json(o);
});

export default router;
