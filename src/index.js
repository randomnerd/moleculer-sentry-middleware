import Sentry from './sentry';

const middleware = options => {
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
        return next(schema, schemaMods);
      };
    },
  };
};

export {Sentry, middleware};
