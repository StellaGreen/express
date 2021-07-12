const express = require('express')
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = '192.168.1.12' // my local ip on my network
const PORT = 3000

// GET sur la racine
app.get('/',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  //nous recupérons l'ip source de la requête
  res.send(`
  Welcome ${req.ip} to my first express app.
  You check the exercices of Stella,
  You have the paths : `+`</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// POST sur la racine
app.post('/',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send("Sorry we don't post requests yet.")
})

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book'+`</br>` + `</br>` +
    `<a href="/">home</a> `+ `</br>` + `</br>` +
    `<a href="/hello">hello</a> `+`</br>` + `</br>` +
    `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
    `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
    `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
    `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
    `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
    `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
    `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
    `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
    `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
    `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

// GET sur '/hello'
app.get('/hello',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('Hello World!'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// GET sur '/hello/sofiane'
app.get('/hello/sofiane',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('Hello Sofiane!'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// GET sur '/hello/franck'
app.get('/hello/franck',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('Hello Franck!'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})


// GET sur '/hello/:name'
app.get('/hello/:name',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`Hello ${req.params.name}, how are you ?`+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `)
})

// route path match acd and abcd
app.get('/ab?cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('ab?cd'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// route path match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('ab+cd'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// route path will match abcd, abxcd, abRANDOMcd, ab123cd,
// and so on.
app.get('/ab*cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('ab*cd'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('ab(cd)?e'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// This route path will match butterfly and dragonfly,
// but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/,
  (req, res, next) => {
    console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
    next()
  }, (req, res) => {
  res.send('code path : /.*fly$/'+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// a route with parameters userId & BookId
// GET /users/11/books/13
app.get('/users/:userId/books/:bookId',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`Book with id ${req.params.bookId} for user with id ${req.params.userId}`+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `
  )
})

// GET sur '/:random'
app.get('/:random',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`Hello, you have tap the path : ${req.params.random}, sorry, i don't have create this path, try later !`+`</br>` + `</br>` +
  `<a href="/">home</a> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `+  `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/book">book</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
  console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
// 192.168.1.12