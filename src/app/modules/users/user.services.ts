import { TUser } from './user.interface'
import { User } from './user.model'

// Create a new user
const createUserIntoDB = async (payload: TUser): Promise<TUser> => {
  const createdUser = await User.create(payload)
  return createdUser
}

const getAllUsersFromDB = async (
  page: number,
  pageSize: number,
): Promise<TUser[]> => {
  const users = await User.find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
  return users
}

// Retrieve a specific user
const getSingleUserFromDB = async (id: string): Promise<TUser | null> => {
  const user = await User.findOne({ id: id })
  return user
}

// Update user
const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findOneAndUpdate({ id: id }, payload, {
    new: true,
  })
  return result
}

// Delete a user
const deleteUserFromDB = async (id: string) => {
  const result = await User.findOneAndDelete({ id: id })
  return result
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
}
