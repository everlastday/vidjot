if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://test12:test12@ds129536.mlab.com:29536/vidjot-prod'
    };
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}