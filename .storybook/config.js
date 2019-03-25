import { configure } from '@storybook/react';

function loadStories() {
  require('../documentation/stories');
}

configure(loadStories, module);
