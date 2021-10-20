const axios = require('axios');
const config = require('../../config/config');

const database = require('../../database');

const UserModel = database.customers;

function updateOrCreate(model, where, newItem) {
  // First try to find the record
  return model.findOne({ where }).then((foundItem) => {
    if (!foundItem) {
      // Item not found, create a new one
      return model.create(newItem).then((item) => ({ item, created: true }));
    }
    // Found an item, update it
    return model
      .update(newItem, { where })
      .then((item) => ({ item, created: false }));
  });
}

module.exports = {
  getUserAccountType: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }

    const { userId } = req.query;

    UserModel.findOne({ id: userId })
      .then((foundItem) => {
        console.log(foundItem.customer_type);
        res.status(200).json(foundItem.customer_type || 'customer');
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  getAccountDetails: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }
    const { userId } = req.query;

    UserModel.findOne({ id: userId })
      .then((foundItem) => {
        res.status(200).json(foundItem);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateAccountDetails: (req, res) => {
    const { userId } = req.query;

    updateOrCreate(UserModel, { id: userId }, req.body)
      .then(() => {
        res.status(201).json(req.body);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateSubscription: (req, res) => {
    const { userId, newStatus } = req.body;

    UserModel.update(
      { subscription_status: newStatus },
      { where: { id: userId } },
    )
      .then((result) => res.status(201).json(newStatus))
      .catch((err) => res.status(500).send(err));
  },
  getAllTransactions: (req, res) => {
    const { userId } = req.query;

    const mockTransactions = [
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
      {
        id: Math.round(Math.random() * 88888),
        price: `$${(Math.random() * 100).toFixed(2)}`,
      },
    ];

    database.transactions
      .findAll({ user_id: userId })
      .then((transactions) => {
        // HERE
        const trans = transactions.length === 0 ? mockTransactions : transactions;
        res.status(200).json(trans);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  getTransaction: (req, res) => {
    const { transactionId } = req.query;

    database.transactions
      .findOne({ id: transactionId })
      .then((transaction) => {
        res.status(200).json(transaction);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  updateTransaction: (req, res) => {
    const { transactionId } = req.query;

    database.transactions
      .update(newItem, { id: transactionId })
      .then((item) => {
        res.status(201).json(item);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.findAll();
      res.status(201).json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
