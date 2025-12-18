import { FastifyRequest, FastifyReply } from 'fastify';

import { generatorUUID } from '../core/generators/G-UUID';
import { validatorUUID } from '../core/validators/V-UUID';

import { _UUID } from "../helpers/types/types-UUID";

export class UUIDController 
{
    static async generate(req: FastifyRequest, reply: FastifyReply) 
    {
        return reply.send({ "UUID": generatorUUID() });
    }

    static async validate(req: FastifyRequest, reply: FastifyReply) 
    {
        const { UUID } = req.body as { UUID: _UUID };
        return reply.send({ "UUID": UUID, "isValid": validatorUUID(UUID) });
    }
}