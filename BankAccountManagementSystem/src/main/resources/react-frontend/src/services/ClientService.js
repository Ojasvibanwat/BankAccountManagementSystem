import axios from 'axios'
//API endpoint 
const CLIENT_BASE_URL = 'http://localhost:8081/bsv'

class ClientService {

    //Axios call to get all clients
    getAllClients() {
        return axios.get(CLIENT_BASE_URL + '/clients');
    }

    //Axios call to add a client
    createClient(client) {
        return axios.post(CLIENT_BASE_URL + '/createClient', client)
    }

    //Axios call to get a client ID
    getClientById(clientId) {
        return axios.get(CLIENT_BASE_URL + '/retrieveClient/' + clientId)
    }


    ////Axios call to update a client by ID
    updateClient(clientId, client) {
        return axios.put(CLIENT_BASE_URL + '/updateClient/' + clientId, client);
    }

    //Axios call to delete client by ID
    deleteClient(clientId) {
        return axios.delete(CLIENT_BASE_URL + '/deleteClient/' + clientId);
    }

    //Axios call to view details of a client by ID
    viewDetails(clientId, client) {
        return axios.get(CLIENT_BASE_URL + '/viewDetails/' + clientId, client);
    }

    viewBalance(clientId, client) {
        return axios.get(CLIENT_BASE_URL + '/viewBalance/' + clientId, client);
    }

    //Axios call to deposit the amount using ID and amount
    deposit(clientId, amount) {
        return axios.put(CLIENT_BASE_URL + '/deposit/' + clientId + '/' + amount);
    }

    //Axios call to withdraw the amount using ID and amount
    withdraw(clientId, amount) {
        return axios.put(CLIENT_BASE_URL + '/withdraw/' + clientId + '/' + amount);
    }

}

export default new ClientService();