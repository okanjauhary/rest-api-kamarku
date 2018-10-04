const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/users');
const roomRouter = require('./routers/rooms');

mongoose.connect('mongodb://127.0.0.1:27017/kamarku', { useNewUrlParser: true })
mongoose.Promise = global.Promise

app.use(bodyParser.json())
// routing
app.use('/api', userRouter)
app.use('/api', roomRouter)

app.use((err, req, res, next) => {
  res.status(422).send({error: err.message})
})

app.listen(8000, () => {
  console.log("Server is running....");
})
