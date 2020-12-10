const path = require('path');//nodejs  模块写法.

module.exports = {
  mode: 'production',//development
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),//打包完成输出文件的路径  绝对路径
    filename: '[name].js' //[hash]. 输出文件的名称 [name] 默认是main 如果多文件入口就是入口的键名  hash 文件的hash码
  },

  module: {
    rules: [//解析规则
      {
        test: /\.less$/,//匹配less结尾的文件
        use: [
          { loader: 'style-loader' },//把引入css写入style标签
          { loader: 'css-loader' },//把css文件引入并处理
          { loader: 'less-loader' }//把css文件引入并处理
        ]

      },

    ]
  }
}