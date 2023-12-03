import { TFilter, TUser, UserDocument } from './user.interface'
import { User } from './user.model'

// Create a new user
const createUserIntoDB = async (payload: TUser): Promise<TUser> => {
  const createdUser = await User.create(payload)
  return createdUser
}

// const getAllUsersFromDB = async (
//   filter: TFilter,
//   page: number,
//   pageSize: number,
// ): Promise<{ users: UserDocument[]; totalPages: number }> => {
//   const query = User.find()

//   if (filter.domain) {
//     query.where('domain').equals(filter.domain)
//   }

//   if (filter.gender) {
//     query.where('gender').equals(filter.gender)
//   }

//   if (filter.available !== undefined) {
//     query.where('available').equals(filter.available)
//   }

//   // Execute the query and fetch the users
//   const users = await query
//     .skip((page - 1) * pageSize)
//     .limit(pageSize)
//     .exec()

//   // Explicitly cast each user document to UserDocument type
//   const typedUsers: UserDocument[] = users.map(
//     (user) => user.toObject() as UserDocument,
//   )

//   const totalUsers = typedUsers.length // Count the users from the result array

//   const totalPages = Math.ceil(totalUsers / pageSize)

//   return { users: typedUsers, totalPages }
// }

const getAllUsersFromDB = async (
  filter: TFilter,
  page: number,
  pageSize: number,
): Promise<{ users: UserDocument[]; totalPages: number }> => {
  const query = User.find()

  if (filter.domain) {
    query.where('domain').equals(filter.domain)
  }

  if (filter.gender) {
    query.where('gender').equals(filter.gender)
  }

  if (filter.available !== undefined) {
    query.where('available').equals(filter.available)
  }

  // Execute the query and fetch the users
  const users = await query
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .exec()

  // Explicitly cast each user document to UserDocument type
  const typedUsers: UserDocument[] = users.map(
    (user) => user.toObject() as UserDocument,
  )

  console.log(typedUsers)
  const totalUsers = typedUsers.length // Count the users from the result array

  const totalPages = Math.ceil(totalUsers / pageSize)

  return { users: typedUsers, totalPages }
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

// search implement
const searchUsersFromDB = async (
  query: string,
  page: number,
  pageSize: number,
) => {
  const startIndex = (page - 1) * pageSize

  const result = await User.find({
    $or: [
      { first_name: { $regex: query, $options: 'i' } },
      { last_name: { $regex: query, $options: 'i' } },
    ],
  })
    .skip(startIndex)
    .limit(pageSize)

  const totalUsers = await User.countDocuments({
    $or: [
      { first_name: { $regex: query, $options: 'i' } },
      { last_name: { $regex: query, $options: 'i' } },
    ],
  })

  const totalPages = Math.ceil(totalUsers / pageSize)

  return { users: result, totalPages }
}

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  searchUsersFromDB,
}
