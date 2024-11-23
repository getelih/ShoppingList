const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Arendusrežiim
  entry: './src/index.jsx', // Sisenemispunkt
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Väljundfail
    clean: true, // Puhastab "dist" kausta enne iga buildimist
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Töötleb JS ja JSX faile
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Töötleb CSS faile
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Lisab toetuse JS ja JSX laienditele
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // HTML mall
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Staatiliste failide kaust
    port: 3000, // Serveri port
    open: true, // Avab brauseri automaatselt
    hot: true, // Kuumlaadimine
  },
};
