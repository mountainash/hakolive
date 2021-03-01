const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? process.env.WEBSITE_URL : `https://${process.env.VERCEL_URL}`;