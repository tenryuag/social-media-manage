const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const getItem = (key) => {
    if (window.localStorage.getItem(key)) {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : undefined;
    }
    return undefined;
}

export function setUser(user) {
    setItem('user', user);
}

export function getUser() {
    return getItem('user');
}

export function clear() {
    window.localStorage.clear();
}