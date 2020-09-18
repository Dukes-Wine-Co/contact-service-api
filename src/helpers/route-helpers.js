const { DWC_API_KEY } = require('../config/app-config');

const validateReq = (req, res, next) => {
    if (req.headers['dwc-token'] === DWC_API_KEY){
        next();
    } else {
        res.json({
            message: 'The api key is invalid. Please authenticate using a valid api key.',
            submittedKey: req.headers['dwc-token'],
            success: false
        })
    }
}

module.exports = {
    validateReq
}
