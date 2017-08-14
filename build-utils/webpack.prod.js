const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
   devtool: false,
   module: {
        rules: [
            {
                test: /\.css/,
                use: ExtractTextWebpackPlugin.extract({
                    use: "css-loader",
                    fallback: "style-loader"
                })
            }
        ]
    },
   plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new ExtractTextWebpackPlugin("style.css"),
        new UglifyjsWebpackPlugin({
            sourceMap: false
        }),
        new CompressionWebpackPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js|html|css)$/,
            threshold: 10240,
            minratio: 0.8
        }),
        new SWPrecacheWebpackPlugin(
          {
            cacheId: 'my-domain-cache-id',
            dontCacheBustUrlsMatching: /\.\w{8}\./,
            filename: 'service-worker.js',
            minify: true,
            navigateFallback: 'index.html',
            staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
          }
        ),
        new WebpackPwaManifest({
          name: 'My Applications Name',
          short_name: 'Application',
          description: 'Description!',
          background_color: '#01579b',
          theme_color: '#01579b',
          'theme-color': '#01579b',
          start_url: '/',
          icons: [
            {
              src: path.resolve('src/assets/icon.png'),
              sizes: [96, 128, 192, 256, 384, 512],
              destination: path.join('assets', 'icons')
            }
          ]
        })
   ]
}
