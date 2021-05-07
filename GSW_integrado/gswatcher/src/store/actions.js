import axios from 'axios';

export const getProjects = ({ commit }) =>{
    axios.get('http://127.0.0.1:3000/api/projetos') //ip local para prevenir CORS
    .then(response => {
        commit('SET_PROJECTS', response.data);
    })
    
}