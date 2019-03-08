import Sentry from '@sentry/node';

export default options => {
  const defaults = {
    dsn: null,
    release: null,
    debug: false,
  };
  const finalOptions = {...defaults, ...options};

  return {
    createService(next) {
      return (schema, schemaMods) => {
        Sentry.init(finalOptions);
        return next(schema, schemaMods);
      };
    },
  };
};
