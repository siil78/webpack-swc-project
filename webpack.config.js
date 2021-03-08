const path = require("path");
//plugin vytvoří samostatný css soubor
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//plugin do dist adresáře zahrnte i index.html, pokud je v src adresáři
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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

  //nastavení cesty pro obrázky
  output: {
    //definice výstupního adresáře kompilovaného projektu
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        //zajistí zkopírování obrázků do dist adresáře a jejich správnou cestu ve zkompilovaném kodu
        test: /\.(png|jpe?g|gif|svg)/i,
        //zkopíruje obrázky do dist adresáře
        //type: "asset/resource",
        //asset/inline zkompiluje obrázky přímo do main.js kodu, hodí se pro malé ikony atd
        //type: "asset/inline",
        //webpack rozhodne mezi inline nebo resource
        type: "asset",
        // //parser umožňuje nastavit, jakou velikost ještě kompilovat do inline js
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
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

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
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
