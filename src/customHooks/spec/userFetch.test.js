import { renderHook } from '@testing-library/react';
import useFetch from '../useFetch';
import { useDispatch, useSelector } from 'react-redux'; 

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn()
  }));

describe('useFetch hook', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });
  test('fetches data if articlesData is empty', async () => {
    const dispatchMock = jest.fn();
    useSelector.mockReturnValueOnce({
        articlesData: [],
        loading: false,
        error: null,
      });

    useDispatch.mockReturnValue(dispatchMock);

    // Render the hook
    renderHook(() => useFetch());

    expect(dispatchMock).toHaveBeenCalled();

    const mockResponse = [{ id: 1, title: 'Article 1' }, { id: 2, title: 'Article 2' }];
    // useDispatch.mock.calls[0][0](mockResponse);

    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
    expect(useSelector).toHaveBeenCalledWith(expect.any(Function));

  });
});
