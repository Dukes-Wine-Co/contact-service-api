const mongoUrl = process.env.MONGO_DB_URL;
const DWC_API_KEY = process.env.DWC_API_KEY;

const config = {
    mongoUrl,
    DWC_API_KEY
};

module.exports = config;
