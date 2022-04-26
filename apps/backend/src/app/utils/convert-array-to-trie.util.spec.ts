import { DB } from '../services/mock-phone-data/db';
import { convertArrayToTrie } from './convert-array-to-trie.util';

describe('Tests for trie converter', () => {
  it('should convert DB to trie', () => {
    // Arrange
    const db = [...DB];

    // Act
    const result = convertArrayToTrie(db);

    // Assert
    expect(result).toMatchSnapshot();
  });
});
