# Welcome to black-cat app 👋

这是一个使用 [Expo](https://expo.dev) 创建的项目 [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. 安装依赖

```bash
yarn install
```

2. 启动项目

```bash
// 开启安卓
yarn android

// 开启 ios
yarn ios
```

3. 服务端项目在 service 目录下

3.1 暗转依赖

```bash
yarn install
```

3.2 开启项目

```bash
yarn dev
```

## 踩的一些坑

### 无法启动项目

解决方案：调大 `--max-old-space-size` 环境变量的值，直接写在了 `package.json` 启动脚本中

```json
{
   "ios": "export NODE_OPTIONS=--max-old-space-size=8192 && expo start --android --reset-cache"
}
```

### 启动 Expo 项目无法自动连接到ios虚拟机

原因是ios默认虚拟机的id与本机虚拟机的id不一致，虽然是同一个版本，该问题***暂未解决***

解决方案：

 - 使用 android 进行开发调试
 - 在 ios 虚拟机上安装 Expo 手动输入链接进行 connect


### svg 处理

1. 全局安装`@svgr/cli`

```
npm i @svgr/cli -g
```

2. 在`./assets/svgs`目录下新增 svg 文件

3. 将 svg 文件批量转换为 React 组件，在命令行执行以下文件

```bash
// npx @svgr/cli --native -d 输出目录 输入目录
npx @svgr/cli --native -d ./components/svgs ./assets/svgs
```

4. 修改 svg 组件的颜色, 可以按照下列方式

```js
import LogoCat from '@/components/svgs/LogoCat';

<LogoCat style={[styles.logoCat, { fill: '#D5EF7F' }]} />

// 或者
<LogoCat style={styles.logoCat} fill="#D5EF7F" />

```

### ios 虚拟机在打开含有react-native-tab-view组件的页面时程序会崩溃

解决方案：下载 `7.0.0-rc.0` 版本的 `react-native-pager-view`

```bash
yarn add react-native-pager-view@7.0.0-rc.0
```

### 日历组件在ios和android上的默认表现形式不一样

解决方案：

1. 判断当前环境
2. 根据环境的不同做不同的实现

