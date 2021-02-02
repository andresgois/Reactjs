module.exports = {
  // nos módulos
  module: {
    // Aplique as seguintes regras
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Nos arquivos que terminam ($) com .js
        test: /\.js$/,
        // Não procure nada em node_modules
        exclude: /node_modules/,
        // Use o seguinte
        use: {
          // Babel
          loader: 'babel-loader', 
          // Com opções padrões para react
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
    ]
  }
}