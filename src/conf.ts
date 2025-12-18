import fastify, { FastifyInstance }  from "fastify";
import cors from "@fastify/cors";

export const app: FastifyInstance = fastify({ 
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

await app.register(cors)

import { healthRoutes } from './routes/healthRoutes';
app.register(healthRoutes, { prefix: '/api/verify' })

import { UUIDRoutes } from "./routes/UUIDRoutes";
app.register(UUIDRoutes, { prefix: '/api/UUID' })