export const GET_LoginUser = () => {
	fetch("URL")
		.then((response) => response.json())
		.then((data) => console.log(data));
};
