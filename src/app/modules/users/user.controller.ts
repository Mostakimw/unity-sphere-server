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

export const UserControllers = {
  createUser,
}
