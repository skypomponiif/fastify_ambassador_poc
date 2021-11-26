import fastify, { FastifyInstance } from 'fastify';
import routeOne from './routes/route-1/route';

const build = (opts = {}): [FastifyInstance, Array<any>] => {
    const app: FastifyInstance = fastify(opts);
    const routers = [
        {
            prefix: `${process.env.TARGET_ENV}/${process.env.TARGET_VERSION}/ambassadorTwo`,
            router: routeOne,
        },
    ];
    for (const r of routers) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        app.register(r.router, { prefix: r.prefix });
    }

    return [app, routers];
};

export { build };
