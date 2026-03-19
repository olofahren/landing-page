import PocketBase from 'pocketbase';
import { PB_URL, STANDARD_PASSWORD, STANDARD_USERNAME } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
  const url = PB_URL;
  event.locals.pb = new PocketBase(url);
  event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') 
    || '');
  event.locals.user = null;

  try {
    if (event.locals.pb.authStore.isValid) {
      await event.locals.pb.collection('users').authRefresh();
    } else {
      await event.locals.pb
        .collection('users')
        .authWithPassword(STANDARD_USERNAME as string, STANDARD_PASSWORD as string);
    }

    if (event.locals.pb.authStore.isValid && event.locals.pb.authStore.model) {
      event.locals.user = structuredClone(event.locals.pb.authStore.model);
      event.locals.user!.isAdmin = event.locals.pb.authStore.isSuperuser;
    }
  } catch {
    event.locals.pb.authStore.clear();
    event.locals.user = null;
  }
  
  const response = await resolve(event);
  // TODO: secure this
  response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ 
    secure: false }));

  return response;
};