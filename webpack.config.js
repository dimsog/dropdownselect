const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/scss/dropdownselect.scss', './src/js/dropdownselect.js'],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'dropdownselect.js',
        library: 'DropdownSelect',
        libraryExport: "default",
        libraryTarget: "var"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'dropdownselect.css'
        })
    ]
};