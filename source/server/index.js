import express from 'express';

const app = express();

app.use(express.static(__dirname + '/../static'));
app.use('/assets', express.static(__dirname + '/../assets'));

app.listen(process.env.PORT || 5000, function() {
  console.log('server started at http://localhost:' + (process.env.PORT || 5000));
});