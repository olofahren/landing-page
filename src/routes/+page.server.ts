import type { PageServerLoad } from './$types'; 
import { error, redirect } from '@sveltejs/kit'; 
import { STANDARD_PASSWORD, STANDARD_USERNAME } from '$env/static/private';

export const load = (async ({ locals }) => { 
    return { 
        user: locals.user 
    }; 
}) satisfies PageServerLoad; 

export const actions = { 
    login: async ({ locals }) => {
        console.log('Logging in with standard credentials');
        const username = STANDARD_USERNAME as string; 
        const password = STANDARD_PASSWORD as string; 

        try { 
            await locals.pb.collection('users').authWithPassword(username, password); 
            if (!locals.pb?.authStore?.model?.verified) { 
                locals.pb.authStore.clear(); 
                return { 
                    notVerified: true 
                }; 
            } 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any 
        } catch (err: any) { 
            throw error(500, err.message); 
        } 

        throw redirect(303, '/'); 
    }
}; 