const Details = require('../models/details');

exports.getProducts = (req, res, next) => {
  Details.find()
    .then(de => {
      console.log(de);
      res.render('about/seed-list', {
        prods: de,
        pageTitle: 'All Products',
        path: '/seed-list'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.deId;
  Details.findById(prodId)
    .then(de => {
      res.render('about/seed-details', {
        de: de,
        pageTitle: de.seed,
        path: '/seed-detail'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Details.find()
    .then(de => {
      res.render('about/seed-index', {
        prods: de,
        pageTitle: 'Shop',
        path: '/about/seeds'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

// exports.getCart = (req, res, next) => {
//   req.user
//     .populate('cart.items.productId')
//     .execPopulate()
//     .then(user => {
//       const products = user.cart.items;
//       res.render('shop/cart', {
//         path: '/cart',
//         pageTitle: 'Your Cart',
//         products: products
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.postCart = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId)
//     .then(product => {
//       return req.user.addToCart(product);
//     })
//     .then(result => {
//       console.log(result);
//       res.redirect('/cart');
//     });
// };

// exports.postCartDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   req.user
//     .removeFromCart(prodId)
//     .then(result => {
//       res.redirect('/cart');
//     })
//     .catch(err => console.log(err));
// };

// exports.postOrder = (req, res, next) => {
//   req.user
//     .populate('cart.items.productId')
//     .execPopulate()
//     .then(user => {
//       const products = user.cart.items.map(i => {
//         return { quantity: i.quantity, product: { ...i.productId._doc } };
//       });
//       const order = new Order({
//         user: {
//           email: req.user.email,
//           userId: req.user
//         },
//         products: products
//       });
//       return order.save();
//     })
//     .then(result => {
//       return req.user.clearCart();
//     })
//     .then(() => {
//       res.redirect('/orders');
//     })
//     .catch(err => console.log(err));
// };

// exports.getOrders = (req, res, next) => {
//   Order.find({ 'user.userId': req.user._id })
//     .then(orders => {
//       res.render('shop/orders', {
//         path: '/orders',
//         pageTitle: 'Your Orders',
//         orders: orders
//       });
//     })
//     .catch(err => console.log(err));
// };



// const Details = require('../models/details');

// exports.getProducts = (req, res, next) => {
  
//   Details.fetchAll()
//     .then(de => {
//       res.render('about/seed-list', {
//         prods: de,
//         pageTitle: 'All Products',
//         path: '/seed-list'
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// exports.getProduct = (req, res, next) => {
//   const prodId = req.params.deId;

//   // Details.findAll({ where: { climate: climateId } })
//   //   .then(products => {
//   //     res.render('about/seed-details', {
//   //       product: products,
//   //       pageTitle: products.title,
//   //       path: "/seed-details"
//   //     });
//   //   })
//   //   .catch(err => console.log(err));
//  Details.findById(prodId)
//     .then(de => {
//       res.render('about/seed-details', {
//         de: de,
//         pageTitle: de.seed,
//         path: "seed-details"
//       });
//     })
//     .catch(err => console.log(err));
// };

// exports.getIndex = (req, res, next) => {
 
//   Details.fetchAll()
//     .then(de => {
//       res.render('about/seed-index', {
//         prods: de,
//         pageTitle: 'Agro web Vision',
//         path: '/list'
//       });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };


