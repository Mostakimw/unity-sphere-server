import dotenv from 'dotenv'
import path from 'path'

const envPath = path.join((process.cwd(), '.env'))
dotenv.config({ path: envPath })

export default {
  port: process.env.PORT,
  database_url_local: process.env.DATABASE_URL_LOCAL,
  database_url: process.env.DATABASE_URL,
}
