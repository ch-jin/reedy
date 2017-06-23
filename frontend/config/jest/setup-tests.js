const inMemoryLocalStorage = {};
window.localStorage = {
  setItem(key, val) {
    inMemoryLocalStorage[key] = val;
  },
  getItem(key) {
    return inMemoryLocalStorage[key];
  },
  removeItem(key) {
    delete inMemoryLocalStorage[key];
  },
};
