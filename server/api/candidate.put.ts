import { sequelize } from "./connection"
import { Candidate } from "../models/Candidate"
import { reactive } from "vue"
export default defineEventHandler(async (event)=> {
    const params = await readBody(event)
    const response = reactive<{
        data?: Number,
        status: boolean
    }>({
        data: 0,
        status: false
    })

    try {
        await sequelize.authenticate()
        if(params.fn == "update") {
            const [rows] = await Candidate.update(
                params.candidate,
                {
                    where: {
                        candidateID: params.candidateID
                    }
                }
            )
            if(rows > 0) {
                response.data = rows
                response.status = true
            }
        }
    } catch (error) {
        console.error('Unable to connect to the Db:', error)
    }
    return response
})