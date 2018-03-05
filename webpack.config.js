const webpack = require('webpack'),
  path = require('path'),
  endPath = path.resolve(__dirname, 'public') // public es el nombre de tu carpeta produccion, también existe build

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css'] // Archivos que soportará webpack
  },
  cache: true,
  entry: [
    'react-hot-loader/patch',  
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/app.jsx' // archiovo de origen
  ],
  output: {
    path: endPath,
    filename: 'app.js', // Archivo donde estará tu archivo js que irá a producción
    publicPath: '/'  
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/', // excluyendo node_modules
        use: 'babel-loader' // traspilador babel
      },
      {
        test: /\.json$/,
        use: 'json-loader' // para que soporte archivos json
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // para los estilos #css
          {
            loader: 'css-loader',
            options: { modules:true }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: endPath,
    inline: true,
    compress: true,
    port: 3000, // localhost
    publicPath: '/'
  }
}