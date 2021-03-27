const mongoose = require ('mongoose') ; 
mongoose.connect('mongodb+srv://ibtihel:ibtihel123@cluster0.komft.mongodb.net/dsNode?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
        .then(() => console.log('mongodb is up  !'))
        .catch((error) => console.log('mongodb is down !', error));

module.exports = mongoose  ; 


