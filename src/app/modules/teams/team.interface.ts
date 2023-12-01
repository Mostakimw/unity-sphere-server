import { Types } from 'mongoose'

export interface TMember {
  user_id: Types.ObjectId // Reference to the User _id as a MongoDB ObjectId
}

export interface TTeam {
  team_name: string
  members: TMember[]
}
