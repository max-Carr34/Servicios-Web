const express = require ("express");
const app = express();
const PORT = 3000; //Puerto donde se ejecuta el servidor

//Habilitando las peticiones del servidor en formato json
//Let: listas en formatos de arreglo
app.use (express.json());
let estudiantes=[   
    {id:1,nombre:'Juan Pérez'},
    {id:2,nombre:'Monica Gomez'},
    {id:3,nombre:'Jose Ruiz'},
]; 

//GET: Obtener todos los estudiantes   -  req(request),res(response)
app.get('/estudiantes',(req,res) =>{
    res.json(estudiantes);
});

//Get: Obtener un estudiantes por id   

app.get('/estudiantes/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const estudiante = estudiantes.find(e => e.id === id);
    if (estudiante){
        res.json(estudiante);
    }
    else{
        res.status(404).send('Estudiante no encontrado')
    }
});

//app.post crea una ruta para agregar un nuevo estudiante al arreglo 
//id: Parametro dinamico
//Push: Enviar
//json(201): Es que esta creado
// =>: Arrow funcional es conocido como paso de parametros que es una devolucion de valores dentro delas variables (const) declaradas

app.post('/estudiantes', (req,res) =>{
    const nuevoEstudiante = {
        id:estudiantes.length+1,
        nombre:req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

//Buscar un Item

app.put('/items/:id', (req, res)=> {
    const id= parseInt(req.params,id);
    const item= items.find(i=>i.id===id);
    if(item){
        item.name=req.body.name;
        res.json(item);
    }else{
        res.status(404).send('Item no encontrado');
    }
});

//Delete: Eliminar un item por ID
app.delete('/estudiantes/:id',(req,res) =>{
    const id = parseInt (req.params.id);
    const index = estudiantes.findIndex(i=>i.id===id);
    if(index!==-1){
        estudiantes.splice(index,1);
        res.send('Estudiante eliminado');
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

//mensaje
app.get('/api/greet',(req,res) =>{
    res.json({message: 'Esta es la primer API!'})
}); //Mandando una respuesta al formato json

//Inicia el servidor
//En la terminal se empieza "node servidor.js"
app.listen(PORT,() =>{
    console.log('Servidor corriendo en http://localhost:$PORT')
}); 