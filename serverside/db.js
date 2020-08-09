const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://moviesCollectionData:atul12345@G@cluster0-perne.mongodb.net/mywebsite?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log("Database connected successfully"))
.catch((err) => console.log(err.message));

   