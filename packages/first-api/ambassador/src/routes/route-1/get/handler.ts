import { callAmbassadorTwo } from './strategy';
export const getHandler = async (): Promise<any> => {
    const res = await callAmbassadorTwo();
    return res;
};
export default getHandler;
