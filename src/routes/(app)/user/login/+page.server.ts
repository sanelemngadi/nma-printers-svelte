import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url}) => {
    let is_register: boolean = false;
    let params = url.searchParams.get("register");

    if(params && params === "true") {
        is_register = true;
    }

    return {
        register: is_register
    }
};