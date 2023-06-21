import mongoose from 'mongoose'
import { config } from './config'
import Logger from 'bunyan'

const log: Logger = config.createLogger('database')

export default () => {
  const connect = () => {
    mongoose
      .connect(config.DATABASE_URL as string)
      .then(() => {
        log.info('Successfully connected to database')
      })
      .catch((err) => {
        log.error('fail connecting to database', err)
        return process.exit(1)
      })
  }
  connect()
  mongoose.connection.on('disconnected', connect)
}
