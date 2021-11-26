import { callOne } from './strategy';
export const getHandler = async (): Promise<any> => {
    const res = await callOne();
    return res;
};

export default getHandler;
