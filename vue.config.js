module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',        //page的主入口
      template: 'public/index.html',    //模板来源
      filename: 'index.html',            //在 dist/index.html 的输出
      title: '多多之家',        
      chunks: ['chunk-vendors', 'chunk-common', 'index'] 
    }
  },
  productionSourceMap: false,
  devServer: {
    port: 3500, // 端口
  },
  lintOnSave: false
}
