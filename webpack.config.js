

const path = require('path')
const MiniCssExstractPlugin = require('mini-css-extract-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
        about: './about.js',
        contract: './contract.js',
        autohim: './autohim.js',
        ownProduct: './own_product.js',
        agTech: './ag_tech.js',
        blog: './blog.js',
        blogMore: './blog_more.js',
        contact: './contact.js'
        
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'source-map',
   
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExstractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExstractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExstractPlugin({
            filename: 'style.css'
        }),
        
    ],
}