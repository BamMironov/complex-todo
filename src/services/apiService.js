export default class ApiService {
    stringify(payload) {
        return JSON.stringify(payload);
    }

    parse(request) {
        return request ? JSON.parse(request) : null;
    }

    getRequest(entity) {
        return this.parse(localStorage.getItem(entity));
    }

    setRequest(entyty, payload) {
        localStorage.setItem(entyty, this.stringify(payload));
    }
}