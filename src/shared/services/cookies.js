import config from '../../../../config';

function setCookie(cname, cvalue, exdays) {
	if (typeof window == 'undefined') return;
	var cookie = "token=" + cvalue;
	document.cookie = cookie;
}

function getCookie(cname) {
	if (typeof window == 'undefined') return undefined;
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			if(c.substring(name.length, c.length) !== ""){
				return c.substring(name.length, c.length);
			}else{
				return undefined;
			}
			
		}
	}
	return undefined;
}

function removeCookie(cname) {
	if (typeof window == 'undefined') return;
	document.cookie = 'token=;expires=' + new Date();
}

module.exports = { setCookie, removeCookie, getCookie };
