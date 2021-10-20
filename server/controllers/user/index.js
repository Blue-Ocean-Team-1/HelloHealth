const axios = require('axios');
const config = require('../../config/config');

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

module.exports = {
  getUserAccountType: (req, res) => {
    console.log(req.query, req.params);
    if (req.query.userId === undefined) {
      res.status(400).send('Invalid category parameters');
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
};
