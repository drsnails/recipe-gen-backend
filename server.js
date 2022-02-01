const express = require('express');
const cors = require('cors');
const path = require('path');
const dbService = require('./services/db.service');

const expressSession = require('express-session');

const app = express();
const http = require('http').createServer(app);

// session setup
const session = expressSession({
  secret: 'coding is amazing',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
});
// Express App Config
app.use(express.json());
app.use(session);
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
  // Express serve static files on production environment
  app.use(express.static(path.resolve(__dirname, 'public')));
} else {
  // Configuring CORS
  const corsOptions = {
    // Make sure origin contains the url your frontend is running on
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

const authRoutes = require('./api/auth/auth.routes');
const userRoutes = require('./api/user/user.routes');
const recipeRoutes = require('./api/recipe/recipe.routes');
// const { connectSockets } = require('./services/socket.service');

// routes
const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/recipe', recipeRoutes);
// connectSockets(http, session)

app.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const logger = require('./services/logger.service');
const recipeService = require('./api/recipe/recipe.service');
const port = process.env.PORT || 3030;
app.listen(port, () => {
  logger.info('Server is running on port: ' + port);
});


// populate()
async function populate() {
  const collection = await dbService.getCollection('recipe')
  const recipes = [
    {
      name: 'mango hot sauce',
      userId: '61f68f802d598abcfccdd290',
      createdAt: Date.now(),
      ingToScaleId: 'r101',
      ingredients: [
        { id: 'r101', name: 'habanero', amount: 500, units: 'g' },
        { id: 'r102', name: 'mango', amount: 300, units: 'g' },
        { id: 'r103', name: 'vinegar', amount: 200, units: 'mL' },
        { id: 'r104', name: 'water', amount: 350, units: 'mL' },
      ]
    },

  ]
  // tasks = await collection.insertMany(recipes)
}


// changeData()
async function changeData() {
  const collection = await dbService.getCollection('recipe')
  const recipes = await collection.find({}).toArray();
  recipes.forEach(recipe => {
    // recipe.instructions ??= ''
    // recipeService.update(recipe)

  })
  


}