const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api-new', {
    useNewUrlParser: true,
    useCreateIndex: true
});



// const me = new User({
//     name:'            Yogita123566767      ',
//     email:'DHANWATE@gmail.com',
//     password:'pas@12345'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!!',error)
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const newTask = new Task({
//     description: 'Lets start with new task ASAp',
//     completed: false
// })

// newTask.save().then(() => {
//     console.log(newTask);
// }).catch((error) => {
//     console.log('-----------error',error);
// })