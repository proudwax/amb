Object.assign || (Object.assign = require('object-assign'));

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express(),
    got = require('got'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,

    config = require('./config'),
    staticFolder = config.staticFolder,

    Render = require('./render'),
    render = Render.render,
    dropCache = Render.dropCache,

    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = process.env.NODE_ENV === 'development';

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(slashes());
    // TODO: csrf, gzip

// JSON данные с nginx
var data = require('../data'),
    data_goods_list = require('../data-goods-list');

passport.serializeUser(function(user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
    done(null, JSON.parse(user));
});

app.get('/ping/', function(req, res) {
    res.send('ok');
});

app.get('/', function(req, res) {

    got(config.tethDomain)
            .then(function(response) {
                json = Object.assign({}, { view: 'index', block: 'content' }, JSON.parse(response.body));
                render(req, res, json, req.xhr ? { block: 'content' } : null);
            })
    .catch(function(err) { console.error(err); });

  // json = Object.assign({}, {view: 'index'}, data);
  // render(req, res, json, req.xhr ? { block: 'content' } : null);

  // render(req, res, {
  //     view: 'index',
  //     title: 'Main page',
  //     meta: {
  //         description: 'Page description',
  //         og: {
  //             url: 'https://site.com',
  //             siteName: 'Site name'
  //         }
  //     }
  // })
});

app.get('/catalog/', function(req, res) {
    got(config.tethDomain + req.originalUrl)
            .then(function(response) {
                json = Object.assign({}, { view: 'goods-list', block: 'goods-list' }, JSON.parse(response.body));
                render(req, res, json, req.xhr ? { block: 'goods-list' } : null);
            })
    .catch(function(err) { console.error(err); });

  // json = Object.assign({}, {view: 'goods-list'}, data_goods_list);
  // render(req, res, json, req.xhr ? { block: 'content' } : null);

});

app.get('/catalog/*', function(req, res) {
    got(config.tethDomain + req.originalUrl)
            .then(function(response) {
                json = Object.assign({}, { view: 'goods-card', block: 'goods-card' }, JSON.parse(response.body));
                render(req, res, json, req.xhr ? { block: 'goods-card' } : null);
            })
    .catch(function(err) { console.error(err); });
});

app.get('*', function(req, res) {
    res.status(404);
    return render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function() {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
