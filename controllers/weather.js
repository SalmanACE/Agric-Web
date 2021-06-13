const Weather = require('../models/weather');

exports.getAddProduct = (req, res, next) => {
  res.render('about/edit-product', {
    pageTitle: 'Add Product',
    path: '/weather/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const image = req.body.image;
  const climate = req.body.climate;
  const land = req.body.land;
  const de = new Weather({
    image: image,
    climate : climate,
    land : land,
    userId: req.user
  });
  de
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/weather/products');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.deId;
  Weather.findById(prodId)
    .then(de => {
      if (!de) {
        return res.redirect('/weather/products');
      }
      res.render('about/edit-product', {
        pageTitle: 'Edit Product',
        path: '/about/edit-product',
        editing: editMode,
        de: de
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.deId;
  const Updatedimage = req.body.image;
  const Updatedclimate = req.body.climate;
  const Updatedland = req.body.land;

  Weather.findById(prodId)
    .then(de => {
      de.image = Updatedimage;
      de.climate = Updatedclimate;
      de.land = Updatedland;
      return de.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/weather/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Weather.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(de => {
      console.log(de);
      res.render('about/products', {
        prods: de,
        pageTitle: 'Admin Products',
        path: '/about/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Weather.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/weather/products');
    })
    .catch(err => console.log(err));
};
