import axios from 'axios'
import { apiConfig } from 'src/constants'

const instance = axios.create({ timeout: apiConfig.TIME_OUT })

export default instance
