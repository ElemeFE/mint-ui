## FAQ

### 给组件绑定的事件为什么无法触发？

在 Vue 2.0 中，为自定义组件绑定原生事件必须使用 `.native` 修饰符：
```html
<mt-button @click.native="handleButtonClick">Click Me</mt-button>
```

### 在项目中引入 Mint UI，但是 CSS 报错/字体文件报错/组件没有样式是什么原因？

请参考 webpack 文档，在 webpack 的 loaders 中正确配置 file-loader、css-loader 和 style-loader。

### 在项目中引入 Mint UI，报 `Uncaught Error: Module build failed: SyntaxError: 'with' in strict mode` 是什么原因？

请避免你使用的编译器处理 Mint UI。比如，若是使用 webpack，请在 loaders 中配置：
```javascript
{
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/
}
```

### 将 Mint UI 克隆至本地，运行时为何会报错/跑不起来？

首先，确保克隆的是 master 分支的最新代码，并且文件完整。其次，确保本地的 node 版本在 4.0 以上，npm 版本在 3.0 以上。最后，请按照 README 的方法启动开发环境：

```bash
npm run dev
```

或是直接打包：

```bash
npm run dist
```
