import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { TUser } from './user.interface'
import { UserServices } from './user.services'
import httpstatus from 'http-status'

const createUser = catchAsync(async (req, res) => {
  const createdUser: TUser = req.body
  const result = await UserServices.createUserIntoDB(createdUser)

  sendResponse(res, {
    statusCode: httpstatus.OK,
    success: true,
    message: 'User created successfully',
    data: result,
  })
})

const getAllUsers = catchAsync(async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query
  const result = await UserServices.getAllUsersFromDB(
    Number(page),
    Number(pageSize),
  )

  sendResponse(res, {
    statusCode: httpstatus.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  })
})

const getSingleUser = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.getSingleUserFromDB(id)

  sendResponse(res, {
    statusCode: httpstatus.OK,
    success: true,
    message: 'Single User retrieved successfully',
    data: result,
  })
})

const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id
  await UserServices.deleteUserFromDB(id)

  sendResponse(res, {
    statusCode: httpstatus.OK,
    success: true,
    message: 'User deleted successfully',
    data: null,
  })
})

const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await UserServices.updateUserIntoDB(id, req.body)

  sendResponse(res, {
    statusCode: httpstatus.OK,
    success: true,
    message: 'User updated successfully',
    data: result,
  })
})

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
}
