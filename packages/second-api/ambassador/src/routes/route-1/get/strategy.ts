import axios from 'axios';
export const callApiTwo = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: `http://localhost:3008/${process.env.TARGET_ENV}/${process.env.TARGET_VERSION}/test/get`,
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    });
};