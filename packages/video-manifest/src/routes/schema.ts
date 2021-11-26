const headersJsonSchema = {
    type: 'object',
    properties: {
        'X-SkyGDP-Territory': { type: 'string' },
        'X-SkyGDP-Proposition': { type: 'string' },
        'X-SkyGDP-Platform': { type: 'string' },
        Authorization: { type: 'string' },
        Accept: { type: 'string' },
        'Content-Type': { type: 'string' },
    },
    required: ['X-SkyGDP-Territory', 'X-SkyGDP-Proposition', 'X-SkyGDP-Platform', 'Authorization'],
};

const bodyJsonSchema = {
    type: 'object',
    required: ['fileReference', 'v', 'originatorHandle'],
    properties: {
        oAuthToken: { type: 'string' },
        fileReference: { type: 'string' },
        v: { type: 'string' },
        originatorHandle: { type: 'string' },
    },
};

export const schema = {
    body: bodyJsonSchema,
    headers: headersJsonSchema,
};
