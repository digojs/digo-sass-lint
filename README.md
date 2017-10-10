# digo-sass-lint
[digo](https://github.com/digojs/digo) 插件：使用 [Sass-Lint](https://github.com/sasstools/sass-lint) 检查 Sass 代码。

## 安装
```bash
npm install digo-sass-lint -g
```

## 用法
### 检查 Sass 代码
```js
digo.src("*.sass", "*.scss").pipe("digo-sass-lint");
```

## 选项
```js
digo.src("*.sass", "*.scss").pipe("digo-sass-lint", {
    level: "default",                   // 报错等级。可以是 "default"、"error" 或 "warning"。
    configuration: ".sass-lint.yml",    // 规则文件。详见 https://github.com/sasstools/sass-lint#rules-documentation
});
```

另参考 https://github.com/sasstools/sass-lint#rules-documentation。
