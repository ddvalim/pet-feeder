const db = require('../../models');
const foodLogModel = db.FoodLog;

const foodLogsService = {
    async setFoodLog(log, bowl_id) {
        try {
            const foodLog = await foodLogModel.create({
                bowl_id: bowl_id,
                log: log,
            });
            return foodLog;
        } catch (err) {
            console.log(err);
            return false;
        }
    },

    async getFoodLog(bowl_id) {
        try {
            const foodLogs = await foodLogModel.findAll({
                where: {
                    bowl_id: bowl_id,
                }
            });
            return foodLogs;
        } catch (err) {
            console.log(err);
            return false;
        }
    },
};

module.exports = foodLogsService;
