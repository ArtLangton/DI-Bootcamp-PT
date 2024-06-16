const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const exercisesRoutes = require('./routes/exercisesRoutes');
const workoutsRoutes = require('./routes/workoutsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userWorkoutsRoutes = require('./routes/userWorkoutsRoutes');

app.use(exercisesRoutes);
app.use(workoutsRoutes);
app.use(usersRoutes);
app.use(userWorkoutsRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ha ocurrido un error en el servidor' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
