import { createClient } from "@sanity/client";

const config = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

export const client = createClient(config);
