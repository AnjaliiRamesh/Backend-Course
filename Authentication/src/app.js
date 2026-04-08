const express = require('express');
const authRoutes = require('./routes/auth-routes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);


// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
module.exports = app;