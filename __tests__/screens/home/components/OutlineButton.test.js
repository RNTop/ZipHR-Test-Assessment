import {OutlineButton} from '@screens/home/components/OutlineButton';
import React from 'react';
import renderer from 'react-test-renderer';

describe('--- OutlineButton Component ---', () => {
  it('Render successfully.', async () => {
    const tree = renderer.create(<OutlineButton />);
    expect(
      tree.root.findByProps({testID: 'outline-button'}).props,
    ).toBeDefined();
  });
});
