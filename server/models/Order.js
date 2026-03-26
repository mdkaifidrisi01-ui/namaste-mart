import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'shipped', 'completed', 'cancelled'], default: 'pending' },
  payment: {
    provider: { type: String, enum: ['phonepe'], default: 'phonepe' },
    transactionId: String,
    raw: Object
  },
  shippingAddress: String
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
