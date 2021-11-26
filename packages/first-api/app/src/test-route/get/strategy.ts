import axios from 'axios';
export const callOne = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://localhost:3007/${process.env.TARGET_ENV}/${process.env.TARGET_VERSION}/routeOne/get`,
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};

