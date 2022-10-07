import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(false);
	const [backTheme, setBackTheme] = useState("white");
	const [notBackTheme, setNotBackTheme] = useState("#181818");
	const [textTheme, setTextTheme] = useState("#181818");
	const [notTextTheme, setNotTextTheme] = useState("white");

	useEffect(() => {
		if (dark) {
			setBackTheme("#181818");
			setNotBackTheme("white");
			setTextTheme("white");
			setNotTextTheme("#181818");
			setDark(true);
		} else {
			setBackTheme("white");
			setNotBackTheme("#181818");
			setTextTheme("#181818");
			setNotTextTheme("white");
			setDark(false);
		}
	}, [dark]);

	const changeTheme = () => {
		setDark(!dark);
	};

	return (
		<ThemeContext.Provider
			value={{
				dark,
				setDark,
				textTheme,
				backTheme,
				notBackTheme,
				notTextTheme,
				changeTheme,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
