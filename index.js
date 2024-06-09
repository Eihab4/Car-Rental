import express from 'express'
import { customerRouter } from './modules/customers/customer.routes.js'
import { carRouter } from './modules/cars/cars.routes.js'
import { rentalRouter } from './modules/rentals/rentals.routes.js'
import { specialApiRouter } from './modules/specialApi/specialApi.routes.js'
const app = express()
const port = 3000

app.use(express.json())

app.use("/customers", customerRouter)
app.use("/cars", carRouter)
app.use("/rentals", rentalRouter)
app.use("/specialApi",specialApiRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))