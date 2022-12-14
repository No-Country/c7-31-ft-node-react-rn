export const POST_LoginUser = (validateUser, setIsValidLogin, saveUserData) => {
	// URL = IP:PORT PARA EXPO , LOCALHOST PARA WEB
	fetch("https://stayup-back.herokuapp.com/api/v1/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(validateUser),
	})
		.then((response) => response.json())
		// DEVUELVE TOKEN
		.then((data) => {
			if (data.token) {
				saveUserData(data);
				setIsValidLogin(true);
			} else {
				setIsValidLogin(false);
			}
		})
		.catch((error) => setIsValidLogin(false));
};
