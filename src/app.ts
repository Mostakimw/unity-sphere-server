import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.routes'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

// routers
app.use('/api', UserRoutes)

app.get('/', (req, res) => {
  res.send('Server running')
})

export default app
