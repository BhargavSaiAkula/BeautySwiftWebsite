// const mongoose = require('mongoose');

// // Define the Order schema
// const OrderSchema = new mongoose.Schema({
//   customer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   restaurant: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Restaurant',
//   },
//   totalAmount: Number,
//   orderStatus: String,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   deliveryAddress: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Address",
//   },
//   items: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "OrderItem",
//   }], 
//   payment: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Payment',
//   },
//   totalItem: Number,
//   totalPrice: Number,
// });

// // Define and export the Order model
// const Order = mongoose.model('Order', OrderSchema);
// module.exports = Order;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/yourdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const orderSchema = new mongoose.Schema({
  customer: {
    email: String,
    phone: String,
  },
  totalAmount: Number,
  items: [
    {
      food: {
        name: String,
        images: [String],
      },
      ingredients: [String],
    },
  ],
  orderStatus: String,
  date: String,
  time: String,
});

const Order = mongoose.model('Order', orderSchema);

app.get('/api/orders', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

app.post('/api/orders/update', async (req, res) => {
  const { orderId, orderStatus } = req.body;
  await Order.findByIdAndUpdate(orderId, { orderStatus });
  res.json({ message: 'Order status updated' });
});

const PORT = 5454;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
