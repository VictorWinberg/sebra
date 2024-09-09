import * as Sentry from '@sentry/react';

const PUBLIC_KEY = 'ac06989c31d83191eae663ad3ca7f416';
const domain = 'o1006021.ingest.us.sentry.io';
const projectId = '4507923834535936';

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: `https://${PUBLIC_KEY}@${domain}/${projectId}`,
    integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
    // Tracing
    tracesSampleRate: 0.2, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ['localhost', /^https:\/\/victorwinberg\.github\.io\/sebra/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}
