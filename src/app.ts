import express, { Express } from 'express'
import { ChattyServer } from '@/setupServer'
import dbConnct from '@/setupDatabase'
import { config } from '@/config'
class Application {
  public initialize(): void {
    this.loadConfig()
    dbConnct()
    const app: Express = express()
    const server: ChattyServer = new ChattyServer(app)
    server.start()
  }

  private loadConfig(): void {
    config.validateConfig()
  }
}

const app: Application = new Application()
app.initialize()
