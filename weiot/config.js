const HtmlWebpackPlugin             = require('html-webpack-plugin');
const { ModuleFederationPlugin }    = require('webpack').container;
const path                          = require('path');
const deps                          = require('./package.json').dependencies;
const ESLintPlugin                  = require('eslint-webpack-plugin');
const StylelintPlugin               = require('stylelint-webpack-plugin');
const webpack                       = require('webpack');
const SvgChunkWebpackPlugin         = require('svg-chunk-webpack-plugin');
const TerserPlugin                  = require('terser-webpack-plugin');


module.exports = {
  entry: './src/index',
  mode: 'development',
  target: 'web',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: [developerPort],
  },
  output: {
    publicPath: 'auto',
  },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({ })
        ],
    },
  module: {
    rules: [

      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
        {
            test: /\.svg$/i,
            use: [
                {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10000,
                    },
                }
            ]
        },
    ],
  },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
  plugins: [
      new SvgChunkWebpackPlugin(),
      new webpack.SourceMapDevToolPlugin({}),
      new webpack.ProgressPlugin((percentage, message) => {
          console.log(`${(percentage * 100).toFixed()}% ${message}`);
      }),
      new ESLintPlugin({ cache: true,emitWarning: false,emitError: false,failOnError: false,failOnWarning: false }),
      new StylelintPlugin({ files: '**/**/*.css', cache: true,emitWarning: false,emitError: false,failOnError: false,failOnWarning: false  }),
      new ModuleFederationPlugin({
      name: '[appScopeName]',
      filename: 'remoteEntry.js',
      exposes: {
        
      
         /*
          * MAIN
          * This expose is MAIN api
          * This is router based is working SERVER/module/app-key/[parameters]
          * ROUTER : YES
          * */
         './DashboardExpose':  './src/Expose/DashboardExpose',

         /*
         * KIOSK
         * This expose is KIOSK api
         * ROUTER : NO
         * */
         './KioskExpose':      './src/Expose/KioskExpose',

         /*
         * MOBILE
         * This expose is MOBILE api working with customer app
         * ROUTER : NO
         * */
         './MobileExpose':     './src/Expose/MobileExpose',

         /*
         * REMOTE
         * This expose is REMOTE api working with browser
         * ROUTER : NO
         * */
         './RemoteExpose':     './src/Expose/RemoteExpose',

         /*
         * SUPPORT
         * This expose is SUPPORT api
         * ROUTER : NO
         * */
         './SupportExpose':    './src/Expose/SupportExpose',


         /*
         * ADMIN OF MODULE
         * This expose is ADMIN OF MODULE api
         * ROUTER : NO
         * */
         './AdminModuleExpose':    './src/Expose/AdminExpose/AdminModuleExpose',


         /*
         * REPORT OF ADMIN
         * This expose is ADMIN OF MODULE api
         * ROUTER : NO
         * */
         './AdminReportModuleExpose':    './src/Expose/AdminExpose/AdminReportModuleExpose',

         /*
          * ADMIN OF SYSTEM
          * This expose is ADMIN OF SYSTEM api
         * ROUTER : NO
          * */
         './AdminSystemExpose':    './src/Expose/AdminExpose/AdminSystemExpose',

         /*
         * COMPANY
         * This expose is COMPANY api
         * ROUTER : NO
         * */
         './CompanyDashboardWidgetExpose':      './src/Expose/CompanyExpose/CompanyDashboardWidgetExpose',
         './CompanyBackgroundExpose':           './src/Expose/CompanyExpose/CompanyBackgroundExpose',
         './CompanyEmployerExpose':             './src/Expose/CompanyExpose/CompanyEmployerExpose',
         './CompanyLogExpose':                  './src/Expose/CompanyExpose/CompanyLogExpose',
         './CompanyReportExpose':               './src/Expose/CompanyExpose/CompanyReportExpose',
         './CompanySettingsExpose':             './src/Expose/CompanyExpose/CompanySettingsExpose',

         /*
         * CUSTOMER
         * This expose is customer api in COMPANY panel
         * ROUTER : NO
         * */
         './CustomerCalendarExpose':   './src/Expose/CustomerExpose/CustomerCalendarExpose',
         './CustomerDashboardExpose':  './src/Expose/CustomerExpose/CustomerDashboardExpose',
         './CustomerFolderExpose':     './src/Expose/CustomerExpose/CustomerFolderExpose',
          './CustomerContactsExpose':   './src/Expose/CustomerExpose/CustomerContactsExpose',
         './CustomerNoteExpose':       './src/Expose/CustomerExpose/CustomerNoteExpose',

         /*
         * CUSTOMER
         * This expose is customer dashboard api in CUSTOMER panel
         * ROUTER : NO
         * */
         './CustomerPanelDashboardExpose': './src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelDashboardExpose',
         './CustomerPanelPageExpose': './src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelPageExpose',
         './CustomerPanelSettingsExpose': './src/Expose/CustomerExpose/CustomerPanelExpose/CustomerPanelSettingsExpose',

         /*
         *
         * DEVELOPER
         *
         * ADD YOUR CUSTOM EXPOSE MODULE
         * */ 

         
      },
      shared: [
        {
          "react": {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
          "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
          },
          antd: {
            requiredVersion: deps.antd,
            singleton: true
          },
          recoil: {
            requiredVersion: deps.antd,
            singleton: true
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
