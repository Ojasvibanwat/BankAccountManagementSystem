import axios from 'axios';
//npm install axios
import DeleteClient from '../components/admin/DeleteC';
const Client_base_url = 'http://localhost:3000/AdminHome';

class ClientServices{
    getAllClients(){
        return axios.get(Client_base_url+"/View")
    }
    createClient(client){
        return axios.get(Client_base_url+"/Create",client)
    }
    getClientById(id){
        return axios.get(Client_base_url+"/Retrieve/"+id)
    }
    updateClient(id,client){
        return axios.get(Client_base_url+"/Update/"+id,client)
    }
    DeleteClient(id){
        return axios.get(Client_base_url+"/Delete/0"+id)
    }
}

export default new ClientServices();