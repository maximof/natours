const express = require('express')
const morgan = require('morgan')

const app = express()

//1. Middleware
app.use(express.json())
app.use(morgan('dev'))

const tourRouter = require('./routes/tourRouter')
const userRouter = require('./routes/userRouter')

//3. Routes
app.use(`/api/v1/tours`, tourRouter);
app.use("/api/v1/users", userRouter);

//4. Start Server
const port = 3000

app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})
