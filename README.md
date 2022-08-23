# vue2 google sheet api串接練習

### 需至`.env`將以下三個換成你自己的
```javascript
VUE_APP_GOOGLE_SHEET_URL = '' //google sheet分享的網址
VUE_APP_GOOGLE_SHEET_ID = '' //google sheet網址上的ID
//請參考 https://docs.google.com/spreadsheets/d/SHEET_ID/edit#gid=0
VUE_APP_GOOGLE_WEB_APP_ID = '' //google sheet的apps script部屬後得到的id
```

### 讀取資料
 - [把google sheet當小型資料庫使用2 串接資料篇](https://hackmd.io/@Yan06/Hy-UkzM1i)
 - [Google Sheets API : google-spreadsheet Package](https://www.npmjs.com/package/google-spreadsheet#examples)
  ```javascript
  npm i google-spreadsheet --save
  ```
 - [VueSheet](https://github.com/aminefreelancer/VueSheet)
 - [
【我可以你也可以的Node.js】第二三篇 - 蛤！原來串接 Google Sheet API 那麼簡單?](https://ithelp.ithome.com.tw/articles/10234325)

### 新增資料
- [把google sheet當小型資料庫使用](https://hackmd.io/@Yan06/HJpfmdgJj)

### use plugins
- [tailwindcss](https://tailwindcss.com/)
- [vue-cli](https://cli.vuejs.org/)

### 備註
1. 沒有做RWD
2. 每隔60秒會自動更新


### Live Demo
[vue2-google-sheet-api-demo](https://vue2-google-sheet-api-demo.herokuapp.com/)

### Project setup
```javascript
npm install
```

### Compiles and hot-reloads for development
```javascript
npm run serve
```

### Compiles and minifies for production
```javascript
npm run build
```
