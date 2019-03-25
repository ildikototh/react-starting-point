const get = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return undefined;
  }
};

const set = (key, value) => {
  try {
    return localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return null;
  }
};

const clear = () => {
  localStorage.clear();
};

export {
  get,
  set,
  clear,
};
