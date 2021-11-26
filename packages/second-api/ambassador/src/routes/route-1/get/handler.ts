import { callApiTwo } from "./strategy";

export const getHandler = async (): Promise<any> => {
    return await callApiTwo();
};

export default getHandler;
