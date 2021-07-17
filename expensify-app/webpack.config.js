// first step is entry point and whats the output file

//checkout webpack.js.org

//loading module

// we will use scss for css  check sass-lang.com/guide
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname , 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: '/node_modules/'
        },{
            use: ['style-loader','css-loader','sass-loader'],
            test: /\.s?css$/
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname , 'public')
    }

};