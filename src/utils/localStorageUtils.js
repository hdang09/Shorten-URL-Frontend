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
        return JSON.parse(item);
    }
    setItem(key, value = '') {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
    removeItem(key) {
        if (typeof localStorage !== 'undefined') {
            localStorage.removeItem(key);
        }
    }
    deleteUser() {
        localStorage.removeItem(config.localStorage.token);
    }
    getToken() {
        return this.getItem(config.localStorage.token);
    }
    clear() {
        localStorage.clear();
    }
}

export default new LocalStorageUtils();
