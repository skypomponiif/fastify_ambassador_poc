import { FastifyInstance } from 'fastify';
import { getHandler } from './get/handler';

const routeOne = async (fastify: FastifyInstance, opts: unknown, done: any) => {
    fastify.get('/get', getHandler);
    done();
};

export default routeOne;
