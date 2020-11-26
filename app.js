// app.js
const express = require('express')
const exphbs = require('express-handlebars')
const morgan = require('morgan')
const app = express()
const port = 3000

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 自定義時間格式 (token)
morgan.token('localDate', function getDate(req) {
  let date = new Date()
  return date.toLocaleString()
})

// 定義format
morgan.format('messageLog', ':localDate | :method from :url')
// 使用自定義的format
app.use(morgan('messageLog'))

// routes setting
app.get('/', (req, res) => {
  const message = '列出全部 Todo'
  res.render('index', { message })
})

app.get('/new', (req, res) => {
  const message = '新增 Todo 頁面'
  res.render('new', { message })
})

app.get('/:id', (req, res) => {
  const message = '顯示一筆 Todo'
  res.render('detail', { message })
})

app.post('/', (req, res) => {
  const message = '新增一筆  Todo'
  res.render('detail', { message })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`App running on port ${port}`)
})