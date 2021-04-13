const foodLogsRouter = require('express').Router();
const foodLogsController = require('../controllers/foodLogsController');

/* INSERT A NEW FOOD LOG INTO SYSTEM */
foodLogsRouter.post('/food-logs', foodLogsController.setFoodLog);

/* GET THE FOOD LOGS IN THE SYSTEM */
foodLogsRouter.get('/food-logs/:bowl_id', foodLogsController.getFoodLog);

module.exports = foodLogsRouter;