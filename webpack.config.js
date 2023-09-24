module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/, // Match JavaScript files
          exclude: /node_modules/, // Exclude the node_modules directory
          use: {
            loader: 'babel-loader', // Use Babel for JavaScript transpilation
          },
        },
        // You can add more rules for other file types here if needed
      ],
    },
  };
  