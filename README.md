# Codex Web

基于 Vue 3 + Vite + TypeScript 的 Codex 网页前端演示，界面支持简体中文 / English 一键切换（默认中文）。

## 页面

- `/` 产品首页：能力介绍、示例会话、入口导航
- `/chat` 工作台：会话列表、消息流、模型 / 权限 / 上下文用量、变更文件与终端面板
- `/admin` 控制台：运行统计卡片、任务列表与状态管理

## 本地开发

```sh
npm install
npm run dev
```

默认地址：http://127.0.0.1:27310

## 构建

```sh
npm run build
```

产物输出到 `dist/`。

## 说明

- 所有会话、任务与统计均为前端本地示例数据，不连接真实后端或模型接口。
- 语言偏好保存在浏览器本地存储（`localStorage`，键名 `codex-locale`）。
- 路由使用 Hash 模式，便于静态部署。
