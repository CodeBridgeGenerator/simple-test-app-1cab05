const assert = require('assert');
const app = require('../../src/app');

describe('\'teachers\' service', () => {
  it('registered the service', () => {
    const service = app.service('teachers');

    assert.ok(service, 'Registered the service (teachers)');
  });
});
