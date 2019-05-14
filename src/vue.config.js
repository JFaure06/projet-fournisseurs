module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/projet-fournisseurs/'
        : '/'
};

const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
    // Other webpack config...
    plugins: [
        // Other plugins...
        new GenerateSW({
            option: 'value',
            include: [/\.html$/, /\.js$/],
            importWorkboxFrom: 'local'
        })
    ],
};

