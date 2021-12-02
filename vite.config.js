export default {

  base: './',

  //vite开发服务器配置
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    strictPort: false,
    https: false,
  },

  //生产模式打包配置
  build: {
    outDir: 'dist',//Specify the output directory (relative to project root).
  }
}
