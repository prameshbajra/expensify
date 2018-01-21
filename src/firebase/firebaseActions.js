import { database } from './firebase';

export const readData = () => {
    let resultArray = [];
    database.ref('expenses')
        .on('value', (snapshot) => {
            const dataReceived = snapshot.val();
            resultArray = Object.keys(dataReceived)
                .map(a => [
                    dataReceived[a].description,
                    dataReceived[a].note,
                    dataReceived[a].createdAt,
                    dataReceived[a].amount]);
            return resultArray;
        });
};

export const writeData = () => {

};
