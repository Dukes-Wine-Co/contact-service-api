const dataMap = require('../data/constants');
const { csvToObj } = require('../helpers/csv-to-obj');

const BulkControls = {
    create: async(req, res) => {
        try {
            const { dataType, requestData } = req.body;
            const { className, modelName } = dataMap[dataType];

            const dataToSubmit = csvToObj(requestData)
                .map(dataEntry => new className(dataEntry).getBody());


            const submissionFeedback = await modelName.insertMany(dataToSubmit);
            res.json({
                success: true,
                mongoResponse: submissionFeedback
            });
        } catch (e){
            res.json({
                success: false,
                error: e
            })
        }

    }
};

module.exports = BulkControls;
