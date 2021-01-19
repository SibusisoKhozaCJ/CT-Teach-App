/**
 * Various functions for setting cookies for authentication.
 */

import Cookies from 'js-cookie'
import history from './history';
import config from '../../config'
import firebase from 'firebase';
import * as authFetch from './authorizedFetch'
firebase.initializeApp(config.firebaseConfig);
const Auth = firebase.auth();

const USER_ID = 'userid';
const IS_AUTHENTICATE = 'isauthenticate';
const USER_FIRSTNAME = 'user_firstname';
const USER_EMAIL = 'user_email'
export const fireAuthenticated = () => {
    if (Auth.currentUser != null) {
        return true;
    } else {
        return false;
    }
}

export const isAuthenticated = () => !!Cookies.get(IS_AUTHENTICATE);

export function change(func) {
    if (Auth)
        Auth.onAuthStateChanged(func);
}

export function signIn(userid, userpass) {
    return Auth.signInWithEmailAndPassword(userid, userpass);
}

export function createUser(userid, userpass) {
    return Auth.createUserWithEmailAndPassword(userid, userpass);
}

export function currentUserId() {
    if (Auth.currentUser) {
        return Auth.currentUser?.uid;
    } else {
        return getCookies().userId;
    }
}

export function getProfile() {
    return authFetch.firebaseGet('Teachers/' + currentUserId())
}

export function checkIfTribeExist(code) {
    return authFetch.firebaseGet('Tribes/' + code)
}

export function getAllTeachers() {
    return authFetch.firebaseGet('Teachers/')
}
export function setCookies(email, userfirstname) {
    Cookies.set(USER_ID, currentUserId());
    Cookies.set(USER_EMAIL, email);
    Cookies.set(IS_AUTHENTICATE, true);
    Cookies.set(USER_FIRSTNAME, userfirstname);
}

export const getCookies = () => ({
    userId: Cookies.get(USER_ID),
    userEmail:  Cookies.get(USER_EMAIL),
    isAuthenticate: Cookies.get(IS_AUTHENTICATE),
    userFirstName: Cookies.get(USER_FIRSTNAME),
});

export function removeCookies() {
    try {
        Cookies.remove(USER_ID);
        Cookies.remove(USER_EMAIL);
        Cookies.remove(IS_AUTHENTICATE);
        Cookies.remove(USER_FIRSTNAME);
        history.push('/');
    } catch (error) {
        console.log('error removing cookies: ', error);
    }
};


export function removeCookiesToReset(email) {
    try {
        Cookies.remove(USER_ID);
        Cookies.remove(USER_EMAIL);
        Cookies.remove(IS_AUTHENTICATE);
        Cookies.remove(USER_FIRSTNAME);
        history.push(`/reset/?email=${email}`);
    } catch (error) {
        console.log('error removing cookies: ', error);
    }
};

