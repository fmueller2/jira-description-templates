const path = require("path");
const webpack = require("webpack");
const WebpackUserscript = require('webpack-userscript');
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: './src/',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [
                    'css-modules-typescript-loader',
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.svg']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "jira-description-templates.user.js"
    },
    plugins: [
        new WebpackUserscript({
            headers: {
                namespace: 'https://dev.bike24.io',
                include: 'https://jira.bike24.net/*'
            }
        })
    ]
};