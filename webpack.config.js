module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [{ loader: 'ts-loader' }]
            }
        ]
    }
};