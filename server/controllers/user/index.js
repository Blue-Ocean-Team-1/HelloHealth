const axios = require('axios');
const config = require('../../config/config');

const database = require('../../database');

const UsersTable = database.User;

// const fetch = (req, res, url, params, data, method) => (
//   axios
//     .request({
//       ...options,
//       params,
//       data,
//       // url: `${spoonacularURL}${url}?apiKey=${apiKey}`,
//       url: `${baseURL}${url}`,
//       method,
//     })
//     .then((response) => response.data)
//     .catch((err) => {
//       res.status(500).send(err);
//     })
// );

function updateOrCreate(model, where, newItem) {
  // First try to find the record
  return model
    .findOne({ where })
    .then((foundItem) => {
      if (!foundItem) {
        // Item not found, create a new one
        return model
          .create(newItem)
          .then((item) => ({ item, created: true }));
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

    // HERE
    res.status(200).json('customer');

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  getAccountDetails: (req, res) => {
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid endpoint parameters');
      return;
    }
    const { userId } = req.query;

    // HERE
    res.status(200).json({
      subscription_status: true,
      referral_code: 91248,
      credit_available: 20.0,
    });

    // UserModel.find({ userId })
    //   .then((items) => {
    //     res.status(200).json(items);
    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  updateAccountDetails: (req, res) => {
    const { userId } = req.query;

    updateOrCreate(UserModel,

    // UserModel.find({ userId })
    //   .then((newUserObj) => {
    // res.status(200).json(newUserObj);

    //   })
    //   .catch((err) => {
    //     res.status(500).send(err);
    //     console.error(`Failed to find documents: ${err}`);
    //   });
  },
  updateSubscription: (req, res) => {
    const { userId, newStatus } = req.body;

    // HERE
    res.status(201).json(newStatus);
    // res.status(400).send('Invalid endpoint parameters');
  },
  getAllTransactions: (req, res) => {
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

    // HERE
    res.status(201).send(mockTransactions);
  },
  getTransaction: (req, res) => {
    // HERE
    res.status(201).send('Success');
  },
  updateTransaction: (req, res) => {
    // HERE
    res.status(201).send('Success');
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(201).json(users);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
