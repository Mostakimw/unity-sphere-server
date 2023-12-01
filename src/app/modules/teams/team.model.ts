import { Schema, model } from 'mongoose'
import { TMember, TTeam } from './team.interface'

const teamMemberSchema = new Schema<TMember>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User', // Reference to the User model
    },
  },
  { _id: false },
)

const teamSchema = new Schema<TTeam>({
  team_name: {
    type: String,
    required: true,
    unique: true,
  },
  members: {
    type: [teamMemberSchema],
    default: [],
  },
})

export const Team = model<TTeam>('Team', teamSchema)
