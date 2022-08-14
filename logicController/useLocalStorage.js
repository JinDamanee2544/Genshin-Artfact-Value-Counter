const getLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, value);
};

const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
