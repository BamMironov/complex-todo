export default class ApiService {
    parse(request) {
        return request ? JSON.parse(request) : null;
    }

    getRequest(entity) {
        return this.parse(localStorage.getItem(entity));
    }

    setRequest(entyty, payload) {
        localStorage.setItem(entyty, payload);
    }
}