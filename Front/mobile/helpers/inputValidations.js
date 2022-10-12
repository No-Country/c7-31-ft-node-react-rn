export const emailValidation = (string, setEmailValid) => {
	const validRegex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.+(?:\.[a-zA-Z0-9-]+)*$/;

	string.match(validRegex) ? setEmailValid(true) : setEmailValid(false);
};

export const passwordValidation = (string, setPasswordValid) => {
	const lowerCaseLetters = /[a-z]/g;
	const upperCaseLetters = /[A-Z]/g;
	const numbers = /[0-9]/g;

	string.match(lowerCaseLetters) !== null &&
	string.match(upperCaseLetters) !== null &&
	string.match(numbers) !== null &&
	string.length > 8
		? setPasswordValid(true)
		: setPasswordValid(false);
};

export const nameLastNameValidation = (string, setter) => {
	/^[a-zA-Z]+$/.test(string) ? setter(true) : setter(false);
};

export const getAge = (dateString) => {
	const today = new Date();
	const birthDate = new Date(dateString);
	const age = today.getFullYear() - birthDate.getFullYear();
	const m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
};
