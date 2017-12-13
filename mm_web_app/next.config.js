const path = require('path')
const glob = require('glob')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  // distDir: 'build',
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    if (!dev) {
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          verbose: true,
          staticFileGlobsIgnorePatterns: [/\.next\//, /dist\//],
          runtimeCaching: [
            {
              handler: 'networkFirst',
              urlPattern: /mmapi00/
            },
            {
              handler: 'fastest',
              urlPattern: /api\/preview/,
              options: {
                cache: {
                  maxEntries: 100,
                  name: 'maomao-preview-cache'
                }
              }
            },
            {
              urlPattern: /maomao/,
              handler: 'fastest',
              options: {
                cache: {
                  maxEntries: 10,
                  name: 'maomao-image-cache'
                }
              }
            }
          ],
          mergeStaticsConfig: true,
          staticFileGlobs: [
            'static/*.*',
            'static/js/*.*',
            'static/images/*.*',
            'static/fonts/**/*.*',
            'static/vendors/**/*.*'
          ]
        })
      )
    }
    return config
  }
}
