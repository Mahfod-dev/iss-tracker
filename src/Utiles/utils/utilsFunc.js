export const firstName = (str) => {
	return str === null ? 'login' : str.split(' ')[0]
}
