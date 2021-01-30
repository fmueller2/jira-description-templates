const path = require("path");
const webpack = require("webpack");
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./src/",
    devtool: 'inline-source-map',
    mode: "development",
    watch: true,
    watchOptions: {
      aggregateTimeout: 600
    },
    watchOptions: {
      ignored: ['dist/**', 'node_modules/**']
    },
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
        extensions: [".ts", ".tsx", ".js", ".css", ".svg"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "jira-description-templates.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
                // ==UserScript==
                // @name        jira-description-templates
                // @namespace   https://dev.bike24.io
                // @version     0.1.0
                // @author      Achim Sperling <achim.sperling@bike24.net>
                // @description A greasemonkey plugin for Jira
                // @include     https://jira.bike24.net/*
                // @copyright   GPL > 3.0
                // ==/UserScript==`
        })
    ]
};