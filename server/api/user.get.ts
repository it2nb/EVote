import { sequelize } from "./connection"
import { User } from "../models/User"
export default defineEventHandler(async (event)=> {
    const params = getQuery(event)
    try {
        await sequelize.authenticate()
        const users = await User.findAll()
        return users
    } catch (error) {
        console.error('Unable to connect to the Db:', error)
    }
})