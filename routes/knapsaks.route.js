const express = require('express');
const router = express.Router();



router.get('/knapsaks', (req, res) => {
  database('knapsaks').select()
    .then((knapsaks) => {
      response.status(200).json(knapsaks);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});
module.exports = router;
