require('./connectDb') ; 
const express = require ('express') ; 
const filmrouter = require ('./routers/films') ; 
const seancerouter = require ('./routers/seances') ; 
const app = express() ; 
const port = process.env.PORT || 3000 ; 
app.use (express.json())  ; 

app.use('/api/film' ,filmrouter )   ; 
app.use('/api/seance' , seancerouter) ; 
app.listen (port , ()=> console.log('application is up ' , port)) ; 