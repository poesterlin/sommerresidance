import { redirect, type Handle } from '@sveltejs/kit';
import { PASSWORD } from "$env/static/private";

export const handle: Handle = async ({ event, resolve }) => {
    if (event.route.id === "/login") {
        return resolve(event);
    }

    const cookies = event.cookies;
    const pwCookie = cookies.get("password");

    if (pwCookie !== PASSWORD) {
        cookies.delete("password", { path: "/" });
        redirect(302, "/login");
    }

    return resolve(event);
};