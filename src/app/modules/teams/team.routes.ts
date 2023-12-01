import express from 'express'
import { TeamControllers } from './team.controller'

const router = express.Router()

router.post('/team', TeamControllers.createTeam)
router.get('/team/:id', TeamControllers.getSingleTeam)

export const TeamRoutes = router
