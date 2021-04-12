const foodLogsRouter = require('express').Router();
const foodLogsController = require('../controllers/foodLogsController');

/* INSERT A NEW FOOD LOG INTO SYSTEM */
foodLogsRouter.post('/food-logs', foodLogsController.setFoodLog);

module.exports = foodLogsRouter;