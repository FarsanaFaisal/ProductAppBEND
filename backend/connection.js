const mongoose = require('mongoose');

mongoose.connect("mongodb://farsanafaisal1125_db_user:Farsana@ac-phgzsnq-shard-00-00.5bdxa3g.mongodb.net:27017,ac-phgzsnq-shard-00-01.5bdxa3g.mongodb.net:27017,ac-phgzsnq-shard-00-02.5bdxa3g.mongodb.net:27017/?ssl=true&replicaSet=atlas-5ij91d-shard-0&authSource=admin&appName=Cluster0")
.then(() => {
    console.log("db connected")
})
.catch((err)=>{
console.log(err)
})