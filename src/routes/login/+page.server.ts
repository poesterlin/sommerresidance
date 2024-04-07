import type { PageServerLoad } from "./$types";
import { PASSWORD, PASSWORD_HINT } from "$env/static/private";
import { redirect, type Actions, fail } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ cookies }) => {
    const pwCookie = cookies.get("password");
    if (pwCookie === PASSWORD) {
        redirect(302, "/");
    }
};

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const form = await request.formData();

        if (!form.has("password")) {
            return fail(400, { message: "Codewort", hint: PASSWORD_HINT, password: "" });
        }

        let password = form.get("password");

        if (typeof password !== "string") {
            return fail(400, { message: "Password must be a string", hint: PASSWORD_HINT, password: "" });
        }

        password = password.trim().toLocaleLowerCase("de-DE");

        if (password !== PASSWORD) {
            return fail(403, { message: "Incorrect password", hint: PASSWORD_HINT, password });
        }

        cookies.set("password", password, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365 // 1 year
        });

        redirect(302, "/");
    }
};