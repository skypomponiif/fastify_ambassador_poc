import axios from 'axios';
export const callAmbassadorTwo = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://localhost:3009/${process.env.TARGET_ENV}/${process.env.TARGET_VERSION}/ambassadorTwo/get`,
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};
