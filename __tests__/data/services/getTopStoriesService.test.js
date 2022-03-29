import {getTopStoriesService} from '@data/services';

const mockedGetTopStoriesServie = jest.fn();

jest.mock('@data/services', () => {
  return {
    getTopStoriesService: section => mockedGetTopStoriesServie(section),
  };
});

describe('--- GetTopStories Service ---', () => {
  const section = 'test';
  beforeEach(() => {
    mockedGetTopStoriesServie.mockClear();
  });

  it('to fetch top stories successfully', async () => {
    const response = {
      status: 'OK',
      section,
      results: [
        {
          section,
          title: 'test',
          url: 'test.html',
          uri: 'test',
        },
      ],
    };
    mockedGetTopStoriesServie.mockImplementation(() => {
      return Promise.resolve(response);
    });
    const data = await getTopStoriesService(section);
    expect(mockedGetTopStoriesServie).toBeCalledWith(section);
    expect(data).toEqual(response);
  });

  it('network error', async () => {
    mockedGetTopStoriesServie.mockImplementation(() => {
      return Promise.resolve({
        status: 500,
        message: 'Something went wrong. please try again later',
      });
    });
    const data = await getTopStoriesService(section);
    expect(mockedGetTopStoriesServie).toBeCalledWith(section);
    expect(data.status).toBe(500);
  });
});
