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
            importWorkboxFrom: 'local',
            templatedURLs : { '/ app-shell' : [ 'dev / templates / app-shell.hbs' , 'dev / ** / *. css' , ], '/ other-page' : 'mon-version-info' , },

        })
    ],
};

