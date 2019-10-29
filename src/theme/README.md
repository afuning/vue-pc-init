# 如何更换主题色

## 安装

为了生成theme文件需要的依赖

```
npm i element-theme -D
npm i element-theme-chalk -D
```

## 执行

### 1. 生成element-variables文件

```
node_modules/.bin/et -i
```

### 2. 编辑element-variables文件

### 3. 执行脚本，生成theme文件

```
node_modules/.bin/et
```

## 替换
babel.config.js配置替换
```
styleLibraryName: "~src/theme/theme-#409EFF(生成的theme文件路径)"
```