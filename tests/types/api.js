const chai = require('chai');

const assert = chai.assert;
const container = document.getElementById('select');
describe('Api', () => {
    it('Instance', () => {
        assert.isNotNull(container);
    });
});