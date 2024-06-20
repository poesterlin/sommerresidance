export const colorMap = new Map([
	['anfahrt', '#F39200'],
	['workshops', '#75C5BD'],
	['faq', '#C8D33E'],
	['camping', '#FEEC6E'],
	['timetable', '#2FAC66'],
	['regeln', '#E8461D']
]);

export function getFontColor(hex: string) {
	hex = hex.slice(1);

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? 'black' : 'white';
}
