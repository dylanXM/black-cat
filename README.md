# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   yarn
   ```

2. Start the app

   ```bash
    npx expo start 
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## svg 处理

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
```
