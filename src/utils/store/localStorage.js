const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));

const getItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return null;
  }
};

const clear = () => {
  localStorage.clear();
};

export {
  getItem,
  setItem,
  clear,
};
