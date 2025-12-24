import {reactive} from 'vue'
import { sequelize } from "./connection"
import { Candidate } from "../models/Candidate"
export default defineEventHandler(async (event)=> {
    const params = getQuery(event)
    try {
        await sequelize.authenticate()
        const response = reactive<{
            data?: Candidate[] | Candidate,
            status: boolean
        }>({
            data: [],
            status: false
        })
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
        return response
    } catch (error) {
        console.error('Unable to connect to the Db:', error)
    }
})