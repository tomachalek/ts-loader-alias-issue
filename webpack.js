const path = require('path');
const mkpath = (p) => path.resolve(__dirname, './public', p);

module.exports = {
    mode: 'production',
    entry: {
        query: mkpath('js/query.ts')
    },
    output: {
        filename: '[name].js',
        path: mkpath('dist'),
        libraryTarget: 'var',
        library: '[name]Page'

    },
    resolve: {
        alias: {
            "plugins/corparch":  mkpath("js/plugins/ucnkCorparch")
        },
        modules: [
            'node_modules'
        ],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.jsx', '.js', '.json', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common'
        }
    }
};
