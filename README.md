# "test": "webpack-dev-server --inline --hot --config webpack.dev.config.js",

```
### 初始化项目
git clone 
npm install

```


### 本地开发
```
npm test
```


### 发布正式版
```
npm start
```


### 目录
```
│  .gitignore           git上传忽略
│  package.json
│  README.md
│  LICENSE
│
├─src
│   │  main.js        项目入口
│   │  index.html     根组件
│   │
│   ├─Config          基础配置
│   │  ├─index.js     基础配置引用
│   │  └─xxx-api.js   接口配置
│   │
│   ├─Module          网站模块
│   │  ├─index.js     页面注入
│   │  ├─Home         页面
│   │  └─...          ...
│   │
│   ├─Directive       公用组件
│   │
│   ├─Router          路由
│   │
│   └─Stalye          样式文件
│
└─build               发布目录
```

需要改进的有很多，请大家可以多提提意见。后续我会不断改进，如果觉得还可以，请star，你们的star是我前进的动力。