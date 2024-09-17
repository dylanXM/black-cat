<h1 align="center">Welcome to black-cat app 👋</h1>

该项目为React Native 的学习项目，前端是使用 [Expo](https://expo.dev) 创建的项目 [`create-expo-app`](https://www.npmjs.com/package/create-expo-app)。而后端（在 `service` 目录下）使用了 [Nest](https://nestjs.com/) 框架构建。

项目仓库：https://github.com/dylanXM/black-cat

## 技术栈

前端：`React Native` + `Redux` + `Typescript` + `RxJS` + `react-query`
- `React 18.2` + `React Native`: 使用 React 语法和组件来创建跨平台的 iOS 和 Android 应用程序
- `Redux`：状态管理，该项目中主要存储了登录状态 + 登录用户信息 + 搜索条件 + 活动详情页信息
- `Typescript`：类型定义 + 类型检查
- `rxjs`：用于处理复杂的异步逻辑 + 发布/订阅模式
- `react-query`: 配合 `axios`，用于管理和缓存异步数据

后端：`Nest` + `Typescript`
- `Nest`：构建高效、可扩展的Node.js 服务器端应用程序，基于 `Express` 框架
- `Typescript`：类型定义 + 类型检查

## Feature
- 用户登录，在 `service/sr/data/user.ts` 目录中存储了该项目用户的虚拟数据
- 使用 `Jwt` 生成登录 `token` 并存储到了 `Redis` 中，用户登录后的每次接口访问都需验证 `token`
- 查看活动列表/详情，用到的数据在 `servie/src/data/twitter/ts` 文件中
- 活动列表搜索/查看，活动详情查看
- 活动列表滚动加载更多 + 点击图标返回最顶层 + 下拉刷新列表
- 活动操作：Like + Going + Comment
- 用户个人信息查看
- 支持组件测试脚本：在 `./test` 目录下
- 支持 `Husky` hooks：在 `.husky` 目录下，目前支持 `pre-commit` hook
- 支持 `GitHub CI`：在 `.github/workflows` 目录下，目前支持合入 `main` 分支的 `lint` 校验

## 演示

### ios
[IOS演示视频](https://sfile.chatglm.cn/chatglm4/8bf599dd-1e01-44be-8cf3-f03f37808bd4.gif)

### android
[安卓演示视频](https://sfile.chatglm.cn/chatglm4/6abbaf77-108c-4fcf-9645-2a27d0733679.gif)

## 开始

1. 拉取项目

```bash
git clone git@github.com:dylanXM/black-cat.git
```

2. 安装依赖

```bash
yarn install
```

3. 启动项目

```bash
// 开启安卓
yarn android

// 开启 ios
yarn ios
```

4. 服务端项目在 service 目录下

4.1 暗转依赖

```bash
yarn install
```

4.2 开启项目

```bash
yarn dev
```

## 更新日志

- 🚀 09.17 新增自定义 `Toast` + 更新演示视频 + `GitHub CI`
- 🚀 09.16 向下滑动加载更多 + 下拉刷新 + `eslint` + `pre-commit` + 编写 `react-test-renderer` 组件测试脚本
- 🚀 09.15 用户详情页面实现 + `activity` 列表和详情页面实现 + 构造 `activity` 数据
- 🚀 09.14 drawer + 搜索功能实现 + 构造登录用户数据
- 🚀 09.13 初始化项目 + 增加项目路由 + 登录页面实现

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

<LogoCat style={[styles.logoCat, { fill: '#fff' }]} />

// 或者
<LogoCat style={styles.logoCat} fill="fff" />

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

