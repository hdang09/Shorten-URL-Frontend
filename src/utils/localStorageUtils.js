import config from '../config';

class LocalStorageUtils {
    getItem(key, defaultValue = '') {
        if (typeof localStorage === 'undefined') {
            return undefined;
        }
        let item = localStorage.getItem(key);
        if (item === undefined) {
            item = defaultValue;
        }
        return item;
    }
    setItem(key, value = '') {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, value);
        }
    }
    removeItem(key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key);
        }
    }
    deleteUser() {
        localStorage.removeItem(config.publicRuntime.LOCALSTORAGE_TOKEN_NAME);
    }
    getToken() {
        return this.getItem(config.publicRuntime.LOCALSTORAGE_TOKEN_NAME);
    }
    clear() {
        localStorage.clear();
    }
}

export default new LocalStorageUtils();
