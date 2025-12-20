import pino from 'pino';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class writeLogs 
{
    private static createLogger(filename: string) 
    {
        return pino({
            timestamp: () => `,"time":"${new Date().toISOString()}"`
        },
            pino.destination({
                dest: path.join(__dirname, '..', '..', '..', 'logs', `${filename}.log`),
                mkdir: true,
                sync: false 
            })
        );
    }

    static uuid(data: object, message: string)
    {
        const logger = this.createLogger('uuid');
        logger.info(data, message);
    }
}