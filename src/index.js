import Sentry from '@sentry/node';

const MyCustomMiddleware = {
  // Wrap broker.createService method
  createService(next) {
    const name = 'name';
    const version = 'name';
    return (schema, schemaMods) => {
      Sentry.init({
        dsn: 'https://9837ca09c8e843a9a90507e6564520a7@sentry.io/1406109',
        release: `${name}@${version}`,
        debug: true,
      });
      return next(schema, schemaMods);
    };
  },
};

export default MyCustomMiddleware;
