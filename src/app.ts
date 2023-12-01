import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.routes'
import globalError from './app/middlewares/globalErrorHandler'
import { TeamRoutes } from './app/modules/teams/team.routes'

const app: Application = express()

// parsers
app.use(express.json())
app.use(cors())

// routers
app.use('/api', UserRoutes)
app.use('/api', TeamRoutes)

//! error handler
app.use(globalError)

app.get('/', (req, res) => {
  res.send('Server running')
})

export default app
