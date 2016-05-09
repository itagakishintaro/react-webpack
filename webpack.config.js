var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
var webpack = require( 'webpack' );

module.exports = {
    entry: './js/src/main.js',
    output: {
        filename: './js/bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [ 'es2015', 'react' ]
                }
          },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract( 'style-loader', 'css-loader!sass-loader' )
            }
       ]
    },
    plugins: [
        new ExtractTextPlugin( 'css/styles.css' ),
        new webpack.DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'production' )
            }
        } )
    ]
};