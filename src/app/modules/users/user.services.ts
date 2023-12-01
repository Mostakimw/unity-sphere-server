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
const getSingleUserFromDB = async (userId: string): Promise<TUser | null> => {
  const user = await User.findById(userId)
  return user
}

// Update user
const updateUserIntoDB = async (
  userId: string,
  payload: TUser,
): Promise<TUser | null> => {
  const result = await User.findByIdAndUpdate(userId, payload, {
    new: true,
  })
  return result
}

// Delete a user
const deleteUserFromDB = async (userId: string): Promise<void> => {
  await User.findByIdAndDelete(userId)
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
}
