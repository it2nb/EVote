import { sequelize } from "./connection"
import { Candidate } from "../models/Candidate"
import { reactive } from "vue"
export default defineEventHandler(async (event)=> {
    const params = await readBody(event)
    const response = reactive<{
        data?: Candidate[] | Candidate,
        status: boolean
    }>({
        data: [],
        status: false
    })
    let candidate: Candidate[] | Candidate | null = null
    try {
        await sequelize.authenticate()
        if(params.fn == "insert") {
            candidate = await Candidate.create(
                params.candidate,
                {
                    fields: Object.keys(params.candidate)
                }
            )
        }
        if(candidate != null) {
            response.data = candidate
            response.status = true
        }
    } catch (error) {
        console.error('Unable to connect to the Db:', error)
    }
    return response
})