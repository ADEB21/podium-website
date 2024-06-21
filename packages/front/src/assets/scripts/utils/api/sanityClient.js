import { createClient } from "@sanity/client";

const config = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset:
    import.meta.env.PUBLIC_MODE === "DEV"
      ? import.meta.env.PUBLIC_SANITY_DATASET_DEV
      : import.meta.env.PUBLIC_SANITY_DATASET_PROD,
  token: import.meta.env.PUBLIC_SANITY_READ_TOKEN,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
};

export const client = createClient(config);
