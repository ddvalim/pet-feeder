const foodLogsService = require("../services/foodLogsService");

const foodLogsController = {
    async setFoodLog(req, res) {
        if (!req.body.bowl_id) {
            return res.status(400).json({
                message: 'Missing bowl_id parameter',
                status: 'Bad request',
            });
        }

        if (!req.body.log) {
            return res.status(400).json({
                message: 'Missing log parameter',
                status: 'Bad request',
            })
        }

        const bowl_id = req.body.bowl_id;
        const log = req.body.log;

        const response = await foodLogsService.setFoodLog(log, bowl_id);
        if (response) {
            return res.status(200).json({
                message: 'Log successfully registered',
                status: 'OK',
                log: response,
            });
        } else {
            return res.status(400).json({
                message: 'Invalid parameters',
                status: 'Bad request',
            });
        }
    },
};

module.exports = foodLogsController;
