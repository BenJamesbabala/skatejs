/* eslint-env jasmine, mocha */

import dashCase from '../../../src/util/dash-case';

describe('utils/dash-case:', () => {
  it('should dash-case a camelCased attribute', () => {
    expect(dashCase('someCamelCasedString')).to.equal('some-camel-cased-string');
  });

  it('should ensure the first character is lowercase if passed a CamelCapped string', () => {
    expect(dashCase('SomeCamelCappedString')).to.equal('some-camel-capped-string');
  });

  it('should not do anything if no uppercase characters are found', () => {
    expect(dashCase('someunreadablestring')).to.equal('someunreadablestring');
  });

  it('should not affect a string that is already dash-cased', () => {
    expect(dashCase('some-dash-cased-string')).to.equal('some-dash-cased-string');
  });
});
