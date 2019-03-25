import { storiesOf } from '@storybook/react';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Checkbox from '../../src/layouts/Checkbox';

const props = {
  label: 'Checkbox label',
  name: 'checkbox1',
};
storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Checkbox {...props} />
  ));
