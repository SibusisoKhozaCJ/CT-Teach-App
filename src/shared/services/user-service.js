import { setCookie, removeCookie, getCookie } from '../services/cookies';

function isLoggedIn() {
	let token = getToken();
	return token && token != 'undefined';
}

function logOut() {
	if (typeof window == 'undefined')
		localStorage.removeItem('user');
	removeCookie('token');
}

function logIn(user, token, expiration) {
	setUserData(user);
	setCookie('token', token, expiration);
}

function getUser() {
	if (typeof window == 'undefined') return undefined;
	let user = localStorage.user;
	if (user) {
		return JSON.parse(user);
	}
	return undefined;
}

function setUserData(user) {
	if (typeof window == 'undefined') return;
	localStorage.user = JSON.stringify({ ...user });
}

function setSTPTemp(results) {
	if (typeof window == 'undefined') return;
	localStorage.setItem('stpResultsTemp', JSON.stringify({ ...results }));
}
function getSTPTemp() {
	if (typeof window == 'undefined') return;
	const data = localStorage.getItem('stpResultsTemp');
	const ret = data && JSON.parse(data);
	return ret;
}
function clearSTPTemp() {
	if (typeof window == 'undefined') return;
	localStorage.removeItem('stpResultsTemp');
}

function getToken() {
	let token = getCookie('token');
	if (token) {
		return token;
	}
	return undefined;
}

module.exports = {
	getUser,
	getToken,
	isLoggedIn,
	logOut,
	logIn,
	setUserData,
	setSTPTemp,
	getSTPTemp,
	clearSTPTemp
};
