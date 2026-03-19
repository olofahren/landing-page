import { json } from '@sveltejs/kit';
import { VISIT_COUNTER_ID } from '$env/static/private';

export const GET = async ({ locals }) => {
  if (!locals.user?.id) {
    return json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    const record = await locals.pb.collection('visits').getOne(VISIT_COUNTER_ID);
    return json({ count: record.no_visits ?? 0 });
  } catch (err: any) {
    return json(
      {
        message: err?.message ?? 'Could not load visit count',
        details: err?.response ?? null
      },
      { status: Number(err?.status) || 500 }
    );
  }
};

export const POST = async ({ locals }) => {
  if (!locals.user?.id) {
    return json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    await locals.pb.collection('visits').update(VISIT_COUNTER_ID, {
      'no_visits+': 1
    });

    const updated = await locals.pb.collection('visits').getOne(VISIT_COUNTER_ID);
    return json({ ok: true, count: updated.no_visits ?? 0 });
  } catch (err: any) {
    return json(
      {
        message: err?.message ?? 'Could not increment counter',
        details: err?.response ?? null
      },
      { status: Number(err?.status) || 500 }
    );
  }
};
