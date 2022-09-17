import  express  from "express";

const app = express();


//wwww.localhost:3333/ads

app.get('/ads',  (request, response)=> {
    return response.json([
        {id: 1, name:'Anúncio 1'},
        {id: 1, name:'Anúncio 2'},
        {id: 1, name:'Anúncio 3'},
        {id: 1, name:'Anúncio 4'},
    ])
});

app.listen(3333);