import React from 'react';
import { storiesOf } from '@storybook/react';
import withRouter from '../utils/withRouter';

import NotFound from '../../src/pages/NotFound';

storiesOf('NotFound', module)
  .addDecorator(withRouter(['/404']))
  .add('Static', () => (
    <NotFound />
  ));
