export const colorMap = new Map([
	['anfahrt', '#f29200'],
	['workshops', '#75c5bc'],
	['faq', '#c6d23e'],
	['camping', '#fbeb6f'],
	['timetable', '#30ac66'],
	['regeln', '#e7451c']
]);

export function getFontColor(hex: string) {
	hex = hex.slice(1);

	const r = parseInt(hex.slice(0, 2), 16);
	const g = parseInt(hex.slice(2, 4), 16);
	const b = parseInt(hex.slice(4, 6), 16);

	const yiq = (r * 299 + g * 587 + b * 114) / 1000;
	return yiq >= 128 ? 'black' : 'white';
}
