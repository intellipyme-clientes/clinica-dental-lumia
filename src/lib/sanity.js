import { createClient } from '@sanity/client';

export const sanity = import.meta.env.PUBLIC_SANITY_PROJECT_ID
  ? createClient({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset:   import.meta.env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

export async function fetchSanity(query, params = {}) {
  if (!sanity) return null;
  try { return await sanity.fetch(query, params); }
  catch { return null; }
}
