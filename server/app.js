const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
const fileUpload = require('express-fileupload');

const userRouter = require('./routes/userRouter');
const todoRouter = require('./routes/todoRouter')
const path = require('path')

const PORT = 3001;
const app = express(); 

app.use(express.static(path.join(__dirname, 'public')))
app.use(fileUpload());
app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

app.use( 
    session({
      name:'sid',
      store: new FileStore({}),
      saveUninitialized: false,
      secret: 'dsmkalmdkl',
      resave: false,
    })
);


app.use('/api/v1/auth', userRouter);
app.use('/api/v1/todo', todoRouter)


app.listen(PORT, () => {
    console.log('Server start on port ', PORT)
})
