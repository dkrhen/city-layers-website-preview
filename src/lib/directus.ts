import { createDirectus, rest, staticToken, readItems } from '@directus/sdk';

const directus = createDirectus(import.meta.env.PUBLIC_DIRECTUS_URL)
    .with(staticToken(import.meta.env.DIRECTUS_TOKEN))
    .with(rest());

export default directus;
export { readItems };