# Molerculer Sentry Middleware

A [Sentry](https://sentry.io) middleware made for [Molerculer](https://moleculer.services/) projects.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation
Add yo your sentry project using yarn:
```
npm install --save @veek/moleculer-sentry-middleware
```
or npm:
```
npm install --save @veek/moleculer-sentry-middleware
```
## Usage

Import the package inside your `moleculer.config.js`:
```
import {sentryMiddleware} from '@veek/moleculer-sentry-middleware';

// setup sentry
const SentryMiddlewareInstance = sentryMiddleware({
  dsn: 'https://9837ca09c8e843a9a90507e6564520a7@sentry.io/1406109',
  release: `${name}@${version}`,
  debug: true,
});


// add to middleware property
export default {
  // [... other moleculer runner configs]
  middlewares: [SentryMiddlewareInstance],
  // [... other moleculer runner configs]
};
```

