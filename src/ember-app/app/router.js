import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test1-запись-l');
  this.route('i-i-s-test1-запись-e',
  { path: 'i-i-s-test1-запись-e/:id' });
  this.route('i-i-s-test1-запись-e.new',
  { path: 'i-i-s-test1-запись-e/new' });
  this.route('i-i-s-test1-клиент-l');
  this.route('i-i-s-test1-клиент-e',
  { path: 'i-i-s-test1-клиент-e/:id' });
  this.route('i-i-s-test1-клиент-e.new',
  { path: 'i-i-s-test1-клиент-e/new' });
  this.route('i-i-s-test1-услуга-l');
  this.route('i-i-s-test1-услуга-e',
  { path: 'i-i-s-test1-услуга-e/:id' });
  this.route('i-i-s-test1-услуга-e.new',
  { path: 'i-i-s-test1-услуга-e/new' });
});

export default Router;
