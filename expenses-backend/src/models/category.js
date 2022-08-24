const db = require('../utils/db');

module.exports.create = ({ description }) => {
    return new Promise ((resolve, reject) => {
        try {
            db.push({ category: db.length+1, description });
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

module.exports.fetchAll = () => {
    return new Promise ((resolve, reject) => {
        resolve(db);
    });
};

module.exports.findById = ({ category }) => {
    return new Promise ((resolve, reject) => {
        resolve(db.filter((c) => c.category === category));
    });
};