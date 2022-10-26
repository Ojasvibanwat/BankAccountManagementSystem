import axios from 'axios'

const CLIENT_BASE_URL = 'http://localhost:8081/bsv'

class ClientService {

    getAllClients() {
        return axios.get(CLIENT_BASE_URL + '/clients');
    }

    createClient(client) {
        return axios.post(CLIENT_BASE_URL + '/createClient', client)
    }

    getClientById(clientId) {
        return axios.get(CLIENT_BASE_URL + '/retrieveClient/' + clientId)
    }

    updateClient(clientId, client) {
        return axios.put(CLIENT_BASE_URL + '/updateClient/' + clientId, client);
    }

    deleteClient(clientId) {
        return axios.delete(CLIENT_BASE_URL + '/deleteClient/' + clientId);
    }
    
    viewBalance(clientId, client) {
        return axios.get(CLIENT_BASE_URL + '/viewBalance/' + clientId, client);
    }

    deposit(clientId, amount) {
        return axios.put(CLIENT_BASE_URL + '/deposit/' + clientId + '/'+ amount);
    }

    withdraw(clientId, amount) {
        return axios.put(CLIENT_BASE_URL + '/withdraw/' + clientId + '/'+ amount);
    }

}

export default new ClientService();