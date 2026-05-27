import { createDirectus, rest, readItems } from '@directus/sdk';

const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL).with(rest());

export default directus;
export { readItems };