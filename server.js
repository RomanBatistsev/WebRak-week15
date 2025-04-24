const express = require('express')
const path = require('path');
const path = require('fs');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (request, response) => {
    const jsonFilePath = path.join(__dirname, 'data', 'cv.json');

    fs.readFile(jsonFilePath, (error, dataFromFile) => {
        if(error) {
            console.error('Failed to read from file.', error);
            return response.status(500).send('Failed to read from fileLoader.');
        }
        const jsonData = JSON.parse(dataFromFile);
        response.render('index', {myCV: jsonData});

    }
    
    
    )

});


app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);

})