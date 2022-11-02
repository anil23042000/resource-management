const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Resource-Management', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});
 
require('../model/project_schema');

require('../model/employee_schema'); 

require('../model/file_schema');