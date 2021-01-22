import formatUrl from './formatUrl';
import { getCookies } from './authentication';
import firebase from 'firebase';

export default (pathname, options = { headers: {} }, query) =>
    fetch(formatUrl({ pathname, query }), {
        ...options,
        headers: {
            'Authorization': getCookies().userId,
            ...options.headers,
        },
    })

export function firebaseInsert(state, data) {
    firebase.database().ref(state).set(data).then();
}

export async function firebaseUpdate(state, data) {
    await firebase.database().ref(state).update(data);
}

export async function firebaseUpdateChild(state, data) {
    await firebase.database().ref(state).child(data.code).update(data);
}

export function firebaseGet(state, callback) {
    let data;
    if (callback)
        firebase.database().ref(state).once('value', function (snapshot) {
            data = snapshot.val();
            callback(data);
        });
    else return new Promise((res) => {
        firebase.database().ref(state).once('value', function (snapshot) {
            data = snapshot.val();
            res(data);
        });
    })
}

