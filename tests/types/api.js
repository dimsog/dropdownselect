const assert = chai.assert;
const select = new DropdownSelect('#select3');
describe('Constructor', () => {
    it('HtmlElement', () => {
        new DropdownSelect(document.getElementById('select'));
    });
    it('Selector', () => {
        new DropdownSelect('#select2');
    });
});

describe('Api', () => {
    it('Add an option', () => {
        select.add({
            id: 1,
            name: 'Test'
        });
    });
    it('Add an empty option group', () => {
        select.addOptgroup('Test group', [{
            id: 2,
            name :'Test 2'
        },{
            id: 3,
            name: 'Test 3'
        }]);
    });
    it('Set value', () => {
        select.setValue(3);
    });
    it('Get value', () => {
        select.setValue(2);
        assert.equal(2, select.getValue());
    });
    it('Get an option by value', () => {
        select.setValue(3);
        const option = select.getSelectedOption();
        assert.equal(3, option.id);
        assert.equal('Test 3', option.name);
    })
});

describe('UI', () => {
    it('Open', () => {
        select.open();
        assert.isTrue(select.$container.classList.contains('dropdownselect--opened'));
        assert.isTrue(select.isOpened());
    });
    it('Close', () => {
        select.close();
        assert.isFalse(select.$container.classList.contains('dropdownselect--opened'));
        assert.isFalse(select.isOpened());
    });
});