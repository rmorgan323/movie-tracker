import cleanRecentData from './cleanRecentData.js';
import { mockRawData, mockCleanData } from '../../data/mockCleaningData';

describe('Clean Data tests', () => {
  it('should be a function', () => {
    expect(cleanRecentData).toBeAFunction;
  });

  it('should clean data', () => {
    const moviesObj = mockRawData;
    const expected = mockCleanData;

    expect(cleanRecentData(moviesObj)).toEqual(expected);
  });
});
