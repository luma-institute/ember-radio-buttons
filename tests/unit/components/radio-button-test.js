import {
  moduleForComponent,
  test
} from 'ember-qunit';

import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radio-button', 'RadioButtonComponent', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{radio-button}}
  `);

  assert.equal(this.$('input[type=radio]').length, 1);
});

test('it updates', function(assert) {
  assert.expect(8);

  this.render(hbs`
    {{radio-button id="red" name="color" value="red" checked=color}}
    {{radio-button id="blue" name="color" value="blue" checked=color}}
    {{radio-button id="green" name="color" value="green" checked=color}}
  `);

  assert.equal(this.$('input:checked').length, 0, 'none checked');

  this.set('color', 'red');

  assert.equal(this.$('input:checked').length, 1, 'one checked');
  assert.ok(this.$('#red').is(':checked'), 'red is checked');

  this.set('color', 'blue');

  assert.equal(this.$('input:checked').length, 1, 'one checked');
  assert.ok(this.$('#blue').is(':checked'), 'blue is checked');

  this.$('#green').click();

  assert.equal(this.$('input:checked').length, 1, 'one checked');
  assert.ok(this.$('#green').is(':checked'), 'green is checked');
  assert.equal(this.get('color'), 'green', 'property updates');
});
