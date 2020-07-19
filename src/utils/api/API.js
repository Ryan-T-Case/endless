import { GET_ALL_STEPS_ENDPOINT } from "../constants"

export class API {
    static async getAllSteps() {
        try {
            const response = await fetch(GET_ALL_STEPS_ENDPOINT)
            return response.json()
        } catch (error) {
            throw error
        }
    }
}
