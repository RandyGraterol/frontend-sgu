// Función para actualizar el localStorage y disparar un evento
const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
  window.dispatchEvent(new Event('storageChange'));
};

export default setLocalStorageItem;