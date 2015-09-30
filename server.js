/**
 * Module Dependencies
 */
var PORT = process.env.PORT || 3000;
var koa = require('koa');
var router = require('koa-route');
var parser = require('koa-bodyparser');
var logger = require('koa-logger');
var serve = require('koa-static');
var marked = require('marked');

/**
 * Expose `app`
 */

exports = app = koa();

/**
 * Setup static directory.
 */

app.use(serve('lib'));

/**
 * Mount bodyparser && logger
 */

app.use(parser());
app.use(logger());

/**
 * Mount Routes
 */

app.use(router.get('/'));
app.use(router.post('/convert', function *(){
	var payload = this.request.body;
	this.status = 200;
	return this.body = { html: marked(payload.md) }
}));

/**
 * Listen on PORT
 */

app.listen(PORT);
console.log('Magic happens on port ' + PORT);
