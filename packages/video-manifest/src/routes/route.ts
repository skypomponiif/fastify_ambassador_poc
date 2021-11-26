import { FastifyInstance } from 'fastify';
import { videoManifestHandler } from './post/handler';
import { schema } from './schema';

const videoManifestRoute = (fastify: FastifyInstance, opts: unknown, done: any) => {
    fastify.post('/manifest', { schema }, videoManifestHandler);
    done();
};

export default videoManifestRoute;
