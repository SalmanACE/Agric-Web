const Details = require('../models/details');

exports.getAddProduct = (req, res, next) => {
  res.render('home/edit-product', {
    pageTitle: 'Add Product',
    path: '/home/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const seed = req.body.seed;
  const image = req.body.image;
  const market = req.body.market;
  const desc = req.body.desc;
  const climate = req.body.climate;
  const land = req.body.land;
  const Landimage = req.body.Landimage;
  const fertilizer = req.body.fertilizer;
  const natural = req.body.natural;
  const irrigation = req.body.irrigation;
  const harvesting = req.body.harvesting;
  const de = new Details({
    seed: seed,
    market: market,
    desc: desc,
    image: image,
    climate : climate,
    land : land,
    Landimage : Landimage,
    fertilizer: fertilizer,
    natural: natural,
    irrigation: irrigation,
    harvesting: harvesting,
    userId: req.user
  });
  de
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/home/products');
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
  Details.findById(prodId)
    .then(de => {
      if (!de) {
        return res.redirect('/');
      }
      res.render('home/edit-product', {
        pageTitle: 'Edit Product',
        path: '/home/edit-product',
        editing: editMode,
        de: de
      });
    })
    .catch(err => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.deId;
  const Updatedseed = req.body.seed;
  const Updatedimage = req.body.image;
  const Updatedmarket = req.body.market;
  const Updatedclimate = req.body.climate;
  const Updatedland = req.body.land;
  const UpdatedLandimage = req.body.Landimage;
  const Updateddesc = req.body.desc;
  const Updatedfertilizer = req.body.fertilizer;
  const Updatednatural = req.body.natural;
  const Updatedirrigation = req.body.irrigation;
  const Updatedharvesting = req.body.harvesting;

  Details.findById(prodId)
    .then(de => {
      de.seed = Updatedseed;
      de.image = Updatedimage;
      de.market = Updatedmarket;
      de.desc = Updateddesc;
      de.climate = Updatedclimate;
      de.land = Updatedland;
      de.Landimage = UpdatedLandimage;
      de.fertilizer = Updatedfertilizer;
      de.natural = Updatednatural;
      de.irrigation = Updatedirrigation;
      de.harvesting = Updatedharvesting;
      return de.save();
    })
    .then(result => {
      console.log('UPDATED PRODUCT!');
      res.redirect('/home/products');
    })
    .catch(err => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Details.find()
    // .select('title price -_id')
    // .populate('userId', 'name')
    .then(products => {
      console.log(products);
      res.render('home/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/home/products'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.deId;
  Details.findByIdAndRemove(prodId)
    .then(() => {
      console.log('DESTROYED PRODUCT');
      res.redirect('/home/products');
    })
    .catch(err => console.log(err));
};

