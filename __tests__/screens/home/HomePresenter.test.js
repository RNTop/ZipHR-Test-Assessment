import React from 'react';
import renderer from 'react-test-renderer';
import {MockedNavigator} from '../../../__mocks__/MockedNavigator';
import HomePresenter from '@screens/home/HomePresenter';

describe('--- HomePresenter Component ---', () => {
  const MockScreen = () => {
    return <HomePresenter />;
  };

  it('Render successfully.', async () => {
    const tree = renderer.create(<MockedNavigator component={MockScreen} />);
    await renderer.act(async () => {});
    expect(tree.root.findByProps({id: 'home-screen'}).props).toBeDefined();
    expect(tree.root.findByProps({id: 'section-list'}).props).toBeDefined();
    expect(
      tree.root.findByProps({id: 'home-search-input'}).props,
    ).toBeDefined();
    expect(tree.root.findByProps({testID: 'top-stories'}).props).toBeDefined();
  });

  it('to test changes of section', async () => {
    const tree = renderer.create(<MockedNavigator component={MockScreen} />);
    await renderer.act(async () => {});
    await renderer.act(async () => {
      await tree.root
        .findByProps({id: 'section-list'})
        .props.setSection('test-section');
    });
    expect(tree.root.findByProps({id: 'section-list'}).props).toBeDefined();
    expect(tree.root.findByProps({id: 'section-list'}).props.section).toBe(
      'test-section',
    );
  });

  it('to test searchInput', async () => {
    const tree = renderer.create(<MockedNavigator component={MockScreen} />);
    await renderer.act(async () => {});
    await renderer.act(async () => {
      await tree.root
        .findByProps({id: 'home-search-input'})
        .props.onChangeText('Ukraine');
    });
    expect(
      tree.root.findByProps({id: 'home-search-input'}).props,
    ).toBeDefined();
    expect(tree.root.findByProps({id: 'home-search-input'}).props.value).toBe(
      'Ukraine',
    );
  });
});
