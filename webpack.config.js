const MiniCssExtractPlugin = require("mini-css-extract-plugin");
let mode = "development";
//pro opravu bugu, kdy se u devServeru nefunguje live reloading
let target = "web";

if (process.env.NODE_ENV == "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],
  //podpora pro jsx soubory
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  devServer: {
    //jaký adresář načíst při webpack serve
    contentBase: "./dist",
    hot: true,
  },
};
