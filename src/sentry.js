import Sentry from '@sentry/node';

class SentryInstance {
  constructor() {
    this.instance = Sentry;
  }

  singletonMethod() {
    return 'singletonMethod';
  }

  get type() {
    return this.instance;
  }

  set type(value) {
    this.instance = value;
  }
}

export default new SentryInstance();
