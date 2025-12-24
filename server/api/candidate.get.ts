import {reactive} from 'vue'
import { sequelize } from "./connection"
import { Candidate } from "../models/Candidate"
export default defineEventHandler(async (event)=> {
    const params = getQuery(event)
    const response = reactive<{
        data?: Candidate[] | Candidate,
        status: boolean
    }>({
        data: [],
        status: false
    })
    try {
        await sequelize.authenticate()
        let candidate: Candidate | Candidate[] | null = null
        if(params.fn == 'getByID') {
            candidate = await Candidate.findOne({
                where: {
                    candidateID: params.candidateID
                }
            })
        } else if(params.fn == 'getAll') {
            candidate = await Candidate.findAll()
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