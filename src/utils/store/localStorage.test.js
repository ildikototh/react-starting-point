import { setItem, getItem, clear } from './localStorage';

describe('LocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.resetAllMocks();
    localStorage.setItem.mockClear();
  });

  it('should return null if missing storage key', () => {
    localStorage.setItem('lorem', 'ipsum');
    expect(getItem('loading')).toEqual(null);
  });

  it('Should set an item in the localStorage', () => {
    setItem('lorem', 'ipsum');
    expect(localStorage.setItem).toHaveBeenCalledWith('lorem', JSON.stringify('ipsum'));
  });

  it('Should return an item from localStorage', () => {
    setItem('lorem', 'ipsum');
    getItem('lorem');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('lorem');
  });

  it('call the clear localstorage function', () => {
    clear();
    expect(localStorage.clear).toHaveBeenCalledTimes(1);
  });
});
