import { FastifyInstance } from "fastify";
import { UUIDController } from "../controllers/UUIDController";

export async function UUIDRoutes(app: FastifyInstance) 
{
    app.get('/generate', UUIDController.generate)
    
    app.post('/validate', UUIDController.validate)
}