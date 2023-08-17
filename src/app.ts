import express, {Application, request, response} from "express"
import morgan from "morgan"
import cors from "cors"

//Routes
import indexRoute from "./routes/index.routes"
import customerRoutes from "./routes/customer.routes"

export class App {

    private app: Application;    

    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
        
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes() {
        this.app.use("/api",indexRoute)
        this.app.use("/api",customerRoutes)
    }

    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log(`Servidor ejecutandose en puerto ${this.app.get('port')}`)
    }
}