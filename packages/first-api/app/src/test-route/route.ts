import { FastifyInstance } from 'fastify';
import { getHandler } from './get/handler';

const testRoute = async (fastify: FastifyInstance, opts: unknown, done: any) => {
    fastify.get('/get', getHandler);
    done();
};

export default testRoute;
