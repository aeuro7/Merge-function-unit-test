import { merge } from '../src/merge';

describe('merge function unit test', () => {
    test('must return merged array', () => {
        const collection_1 = [3,4,5];
        const collection_2 = [1,3,6];
        const collection_3 = [8,7,2];

        const result = merge(collection_1, collection_2, collection_3);
    
        expect(result).toEqual([1,2,3,3,4,5,6,7,8]);
    });

});
