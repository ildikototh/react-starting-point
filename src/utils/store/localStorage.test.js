import { set, get, clear } from './localStorage';

describe('localStorage', () => {
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = JSON.parse(value);
    }

    clear() {
      this.store = {};
    }
  }

  window.localStorage = new LocalStorageMock();
  afterEach(() => {
    window.localStorage.clear();
  });

  it('Should set an item in the localStorage', () => {
    set('loading', 'finished');
    expect(window.localStorage.setItem).toHaveBeenCalledWith('loading', JSON.stringify('finished'));
  });

  it('Should return an item from localStorage', () => {
    set('loading', 'finished');
    const storageValue = get('loading');
    expect(window.localStorage.getItem).toHaveBeenCalledWith('loading');
    expect(storageValue).toEqual('finished');
  });

  it('Should return with null from localStorage on missing item', () => {
    const storageValue = get('load');
    expect(storageValue).toEqual(null);
  });

  it('Should empty the localstorage', () => {
    clear();
    expect(window.localStorage.clear).toHaveBeenCalled();
  });
});
