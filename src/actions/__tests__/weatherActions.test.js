import { searchLocation } from '../weatherActions';
import API from '../../utils/API';
import { SEARCH_LOCATION_SUCCESS } from '../../constants/weatherConstants';
jest.mock('../../utils/API');

describe('Weather Actions', () => {
    let mockDispatch;
    beforeEach(() => {
        mockDispatch = jest.fn();
    });
    describe('action: searchLocation', () => {
        it('should set empty data if query is empty', async () => {
          const spyOnGet = jest.spyOn(API, 'get');
            await searchLocation('')(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, {
                    type: SEARCH_LOCATION_SUCCESS,
                    payload: [],
            });
            expect(spyOnGet).not.toHaveBeenCalled();
        });

        it('should fetch success and set data', async () => {
            const spyOnGet = jest
                .spyOn(API, 'get')
                .mockImplementation(() => ({ data: ['test'] }));
            await searchLocation('hongkong')(mockDispatch);
            expect(mockDispatch).toHaveBeenCalledTimes(2);
            expect(mockDispatch).toHaveBeenNthCalledWith(2, {
            type: SEARCH_LOCATION_SUCCESS,
                payload: ['test'],
            });
            expect(spyOnGet).toHaveBeenCalledWith('location/search/', {
                params: { query: 'hongkong' },
            });
        });
    });
});