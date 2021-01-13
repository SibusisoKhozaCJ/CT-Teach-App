/**
 * This is the most important lib file. It includes the authorization cookies and formats
 * the endpoints correctly depending on the environment. This must be used for authorized 
 * access the backend API.
 */

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

export function firebaseUpdate(state, data) {
    firebase.database().ref(state).update(data);
}
export function firebaseGet(state, callback) {
    var data;
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

