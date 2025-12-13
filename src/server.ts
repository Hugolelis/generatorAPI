import { app } from './conf';
import 'dotenv/config';

const PORT = process.env.PORT
const HOST = process.env.HOST

try {
    app.listen({ host: HOST, port: Number(PORT) })
} catch(e) {
    app.log.error(e)
    process.exit(1);
}