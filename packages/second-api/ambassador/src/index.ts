import { build } from './app';
import dotEnv from 'dotenv';
dotEnv.config();

const fastifyConfig = {};
const [app, routers] = build(fastifyConfig);
const FASTIFY_PORT = Number(process.env.PORT);
// eslint-disable-next-line @typescript-eslint/no-floating-promises
app.listen(FASTIFY_PORT);

console.log(`🚀  ${process.env.API_NAME} ambassador running on port ${FASTIFY_PORT}`);
for (const r of routers) {
    console.log(`Registered router at ${r.prefix}`);
}
