var Router = require('router');
var router = Router();
var home = require('../controllers/home');

router.get('/', home.home);
router.post('/', home.addimg);
router.put('/:id/edit', home.editimg);
router.delete('/delete/:id', home.deleteimg);
router.get('/show/:id', home.showimg);


module.exports = router;