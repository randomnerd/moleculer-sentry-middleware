import * as Sentry from '@sentry/node';

const sentryMiddleware = (options = {}) => {
  const defaults = {
    dsn: null,
    release: null,
    debug: false,
  };
  const finalOptions = {
    ...defaults,
    ...options,
  };

  return {
    createService(next) {
      return (schema, schemaMods) => {
        Sentry.init(finalOptions);
        return next(schema, schemaMods, Sentry);
      };
    },
  };
};

export {Sentry, sentryMiddleware};
