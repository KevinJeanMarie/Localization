const express = require('express')
const app = express();
const port = 5000
const engine = require("express-handlebars").engine
const cors = require('cors');

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.get('/:lang?', (req,res) =>{
    res.send('')
})

res.render("home", {
    
})
app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});
