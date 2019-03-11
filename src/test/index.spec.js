import {sentryMiddleware} from '..';

describe('Test "sentryMiddleware"', () => {
  const sentryMiddlewareInstance = sentryMiddleware();

  describe('Test middleware builder', () => {
    it('should have createService property', () => {
      expect(typeof sentryMiddlewareInstance).toBe(typeof {});
      expect(sentryMiddlewareInstance).toHaveProperty('createService');
    });

    it('should call Sentry.init without exceptions', done => {
      sentryMiddlewareInstance.createService(() => done())();
    });

    it('should create __SENTRY__ global variable', () => {
      expect(__SENTRY__).toBeDefined();
    });
  });
});
