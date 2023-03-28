import Prismic from "@prismicio/client";

export function getPrismicClient(req?: unknown) {
    if (typeof req === 'undefined') {
      return Prismic.client(process.env.PRISMIC_CLIENT);
    }
    return Prismic.client(process.env.PRISMIC_CLIENT, { req });
  }
