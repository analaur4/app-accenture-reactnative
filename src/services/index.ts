import axios from 'axios';

// endpoint de consumo
export const contactSend = axios.create({
    baseURL: 'https://webhook.site/c5debd00-1c45-47e2-a690-01f2b91c1b18'
})

// endpoint de formulário
export const getData = axios.create({
    baseURL: 'https://accenture-server-rn.herokuapp.com'
})
