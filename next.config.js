const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'src/assets/img'),
  webpack(config, options) {
    // config.module.rules.push({
      // test: /\.(jpg|png|svg)$/,
      // test: /\.js|\.jsx$|svg/,
      // use: {
      //     loader: 'url-loader',
      //     options: {
      //         limit: 25000
      //     }
      // }
    // });
    return config
  }
})