import Fastify from 'fastify';
const server = Fastify();
import proxy from 'fastify-http-proxy';
const newLocal = 'http://localhost:3006/dev/v2/test/get2';
// eslint-disable-next-line @typescript-eslint/no-floating-promises
server.register(proxy, {
    upstream: newLocal,
    prefix: '/api', // optional
    http2: false, // optional
});

const PROXY_PORT = Number(process.env.FASTIFY_PROXY_PORT) || 3007;
// eslint-disable-next-line @typescript-eslint/no-floating-promises
// eslint-disable-next-line @typescript-eslint/no-floating-promises
server.listen(PROXY_PORT);
