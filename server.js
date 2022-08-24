const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const { v4: uuidv4 } = require('uuid'); //uuidv4() = '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const koaBody = require('koa-body'); // в лекции нет
const app = new Koa();
app.use(cors());
app.use(koaBody({ json: true })); // в лекции нет

const skills = [
  {
    name_skills: 'Языки программирования',
    skills: ['JavaScript ES6', 'HTML5', 'CSS3', 'TypeScript', ' Node.js'],
  },
  { name_skills: 'Операционные системы', skills: ['Windows'] },
  {
    name_skills: 'Фреймворки',
    skills: [
      'React (react-router v6, react-redux RTK, redux-saga (observable, thunk, saga)',
      'Koa',
    ],
  },
  { name_skills: 'Инструменты тестирования', skills: ['Jest'] },
  { name_skills: 'Методологии', skills: ['DRY', 'SOLID'] },
  {
    name_skills: 'Инструментарий',
    skills: ['GIT', 'RxJS', 'Jest', 'Webpack', 'ESLint'],
  },
];

const router = new Router();

router.get('/api/skills', async (ctx, next) => {
  ctx.response.body = skills;
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 7070;
const server = http.createServer(app.callback());
server.listen(port);
