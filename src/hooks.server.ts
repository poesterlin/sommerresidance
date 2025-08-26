import { redirect, type Handle } from '@sveltejs/kit';
import { PASSWORD } from '$env/static/private';

const allowedRoutes = ['/login', '/donate'];
export const handle: Handle = async ({ event, resolve }) => {
	// if (event.route.id && allowedRoutes.includes(event.route.id)) {
	// 	return resolve(event);
	// }

	// const cookies = event.cookies;
	// const pwCookie = cookies.get('password');

	// if (pwCookie !== PASSWORD) {
	// 	cookies.delete('password', { path: '/' });
	// 	redirect(302, '/login');
	// }

	return resolve(event);
};
