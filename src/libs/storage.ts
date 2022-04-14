const setStorageItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getStorageItem = <T>(key: string) => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as T) : null;
};

const deleteStorageItem = (key: string) => {
  localStorage.deleteItem(key);
};

export { setStorageItem, getStorageItem, deleteStorageItem };
