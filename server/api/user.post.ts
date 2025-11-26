import { sequelize } from "./connection"
import { User } from "../models/User"
import { reactive } from "vue"
export default defineEventHandler(async (event)=> {
    const params = await readBody(event)
    const response = reactive<{
        data?: User[] | User,
        status: boolean
    }>({
        data: [],
        status: false
    })
    try {
        await sequelize.authenticate()
        if(params.fn == "userAuth") {
            const user = await User.findOne({
                where: {
                    userName: params.userName,
                    userPass: sequelize.fn('md5', params.userPass)
                }
            })
            if(user != null) {
                response.data = user
                response.status = true
            }
        }
    } catch (error) {
        console.error('Unable to connect to the Db:', error)
    }
    return response
})