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
  res.send(`<h1>
  Welcome ${req.ip} to my first express app.</h1>
  <h2>You check the exercices of Stella,</h2>
  <h3>You have the paths : </h3></br></br>` +
  `- 3 others path with hello + random name hello => <h3><a href="/hello">hello</a></h3> `+`</br>` + `</br>` +
  `- 3 other path with abcd => <h3><a href="/abcde">abcde</a> </h3>`+  `</br>` + `</br>` +
  `- 3 other path testing work + gestion error random word => <h3><a href="/dragonfly">dragonfly </a> </h3>`)
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
    res.send('<h2>Get a</h2><h1> random </h1><h2>book</h2>'+`</br>` + `</br>` +
    `<h4><a href="/">home</a></h4> `+ `</br>` + `</br>` +
    `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
    `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
    `<a href="/RANDOMWORD">RANDOMWORD</a> `)
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
  res.send('<h1>Hello You !</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// GET sur '/hello/sofiane'
app.get('/hello/sofiane',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>Hello Sofiane!</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a></h4> `+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `+  `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})

// GET sur '/hello/franck'
app.get('/hello/franck',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>Hello Franck!</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/RANDOMNAME ">hello/RANDOMNAME </a> `)
})


// GET sur '/hello/:name'
app.get('/hello/:name',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`<h1>Hello ${req.params.name}, how are you ?</h1>`+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/hello">hello</a> `+`</br>` + `</br>` +
  `<a href="/hello/sofiane">hello/sofiane</a> `+ `</br>` + `</br>` +
  `<a href="/hello/franck">hello/franck</a> `)
})

// route path match acd and abcd
app.get('/ab?cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>ab?cd</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `)
})

// route path match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>ab+cd</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a></h4> `+ `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `+  `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `)
})

// route path will match abcd, abxcd, abRANDOMcd, ab123cd,
// and so on.
app.get('/ab*cd',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>ab*cd</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abcde">abcde</a> `)
})

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send('<h1>ab(cd)?e</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/acd">acd</a> `+  `</br>` + `</br>` +
  `<a href="/abbbbcd">abbbbcd</a> `+ `</br>` + `</br>` +
  `<a href="/abRANDOMcd">abRANDOMcd</a> `)
})

// This route path will match butterfly and dragonfly,
// but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/,
  (req, res, next) => {
    console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
    next()
  }, (req, res) => {
  res.send('<h1>code path : /.*fly$/</h1>'+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `)
})

// a route with parameters userId & BookId
// GET /users/11/books/13
app.get('/users/:userId/books/:bookId',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`<h1>Book with id ${req.params.bookId} for user with id ${req.params.userId}</h1>`+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/RANDOMWORD">RANDOMWORD</a> `+ `</br>` + `</br>` +
  `<a href="/book">book</a> `
  )
})

// GET sur '/:random'
app.get('/:random',
(req, res, next) => {
  console.log(`The response will be sent by the next function at the ip : ${req.ip}`)
  next()
}, (req, res) => {
  res.send(`<h2>Hello, you have tap the path : ${req.params.random}, sorry, i don't have create this path, try later !</h2>`+`</br>` + `</br>` +
  `<h4><a href="/">home</a> </h4>`+ `</br>` + `</br>` +
  `<a href="/dragonfly">dragonfly </a> `+    `</br>` + `</br>` +
  `<a href="/users/14/books/27">users/14/books/27</a> `+   `</br>` + `</br>` +
  `<a href="/book">book</a> `)
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
  console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})
// 192.168.1.12