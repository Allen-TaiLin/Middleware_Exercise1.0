# Middleware 實作練習 - Middleware Exercise 1.0

使用 Node/Express 開發，我們會常常撰寫一些 middleware 小工具來幫助我們 debug，在路由裡加入一支 middleware，目標是伺服器收到任何來自瀏覽器的 request 時，都會自動把資訊紀錄到 server log 裡。
![](/2_3A13Middleware_Exercise_Part1.png)

## Features - 產品功能

- 顯示時間戳記 (time-stamps) - 以當地時間 (台北) 顯示
- 包含請求的 HTTP 方法
- 包含URL資訊

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/) (版本使用 10.15.0) - JavaScript 執行環境
2. [npm](https://nodejs.org/en/) (版本使用 6.4.1) - Node.js 的套件管理器
3. [Express](https://www.npmjs.com/package/express) (版本使用 4.17.1) - 應用程式架構
4. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) (版本使用 5.2.0) - 模板引擎
5. [Nodemon](https://www.npmjs.com/package/nodemon) (版本使用 2.0.6) - 伺服器輔助
6. [Morgan](https://www.npmjs.com/package/morgan) (版本使用 1.10.0) - morgan是一款node.js提供紀錄http請求日誌的middleware

## Use Tools - 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎

## Installing - 專案安裝流程

1. 開啟終端機(Terminal) 或 (Git Bash) 到欲存放專案的本機位置並執行:

```
git clone https://github.com/Allen-TaiLin/Middleware_Exercise1.0.git
```

2. 開啟終端機(Terminal) 或 (Git Bash)，進入到存放此專案的資料夾

```
cd middleware_part1
```

3. 安裝 npm 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install
```

4. 安裝 nodemon 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install -g nodemon
```

5. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

6. 當終端顯示出現以下字樣，表示伺服器已啟動並成功連結

```
App running on port 3000
```



