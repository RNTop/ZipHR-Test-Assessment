import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src';

describe('--- App Component ---', () => {
  it('to render empty', async () => {
    const tree = renderer.create(<App />);
    await renderer.act(async () => {});
    expect(tree.root.findByProps({id: 'home-screen'}).props).toBeDefined();
  });
});
