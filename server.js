const app = require('./lib/app');

const API_URL = process?.env?.API_URL || 'http://localhost';
const PORT = process?.env?.PORT || 3003;

app.listen(PORT, () => console.log(
  `Server running on ${API_URL}:${PORT}`
));

process.on('exit', () => {
  console.log('Server stopped');
});
