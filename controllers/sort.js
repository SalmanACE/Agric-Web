const weather = require('../models/weather');
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
      res.render('about/seed-list', {
        prods: de,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getclimateIndex = (req,res,next)=>{
  weather.find()
  .then(de=>{
    res.render('about/choose-climate',{
      prods : de,
      pageTitle :'Agro',
      path:'/'
    })
  })
};

exports.getlandIndex = (req,res,next)=>{
  weather.find()
  .then(de=>{
    res.render('about/choose-land',{
      prods : de,
      pageTitle :'Agro',
      path:'/choose'
    })
  })
};

exports.getclimateProducts = (req, res, next) => {
  const climateId = req.params.climate;
 // const landId = req.params.land;
  Details.find({climate : climateId })//,{ land : landId })
    .then(de => {
      res.render('about/choose-land', {
        prods : de,
        pageTitle: 'Choose',
        path: '/seed-detail'
      
      })
    })
    .catch(err => console.log(err));
};

exports.getlandProducts = (req, res, next) => {
 // const climateId = req.params.climate;
  const landId = req.params.land;
  Details.find({land : landId})
    .then(de => {
      res.render('about/seed-list', {
        prods : de,
        pageTitle: 'Choose',
        path: '/seed-detail'
      
      })
    })
    .catch(err => console.log(err));
};

exports.getoneProduct = (req, res, next) => {
  const climate  = req.body.climate;
  const land  = req.body.land;
  Details.find({climate : climate},{land : land})
    .then(de => {
      res.render('about/seed-list', {
        prods : de,
        de: de,
        pageTitle: 'Choose',
        path: '/seed-detail'
      });
    })
    .catch(err => console.log(err));
};


// const SortDetails = require('../models/sort');
// const Weather = require('../models/weather');
// const Details = require('../models/Details');

// exports.getweatherIndex = (req, res, next) => {
 
//     Weather.fetchAll()
//       .then(de => {
//         res.render('about/choose-climate', {
//           prods: de,
//           pageTitle: 'Agro web Vision',
//           path: '/choose'
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
  
//   exports.getweatherProducts = (req, res, next) => {
//     const climateId = req.params.climate;
//     const landId = req.params.land;
//     SortDetails.fetchAll(climateId,landId)
//       .then(de => {
//         res.render('about/seed-list', {
//           prods: de,
//           pageTitle: 'All Products',
//           path: '/seed-list'
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
  
//   exports.getweatherProduct = (req, res, next) => {
//     const prodId = req.params.deId;
//     const climateId = req.params.climate;
//     const landId = req.params.landId;
//     // Details.findAll({ where: { climate: climateId } })
//     //   .then(products => {
//     //     res.render('about/seed-details', {
//     //       product: products,
//     //       pageTitle: products.title,
//     //       path: "/seed-details"
//     //     });
//     //   })
//     //   .catch(err => console.log(err));
//    SortDetails.findById(climateId,landId,prodId)
//       .then(de => {
//         res.render('about/seed-details', {
//           de: de,
//           pageTitle: de.seed,
//           path: "seed-details"
//         });
//       })
//       .catch(err => console.log(err));
//   };

//   exports.getProduct = (req, res, next) => {
//     const prodId = req.params.deId;
//    Details.findById(prodId)
//       .then(de => {
//         res.render('about/seed-details', {
//           de: de,
//           pageTitle: de.seed,
//           path: "seed-details"
//         });
//       })
//       .catch(err => console.log(err));
//   };

//   exports.getoneProduct = (req, res, next) => {
//     const climateId = req.body.climate;
//     const landId = req.body.land;
//     SortDetails.fetchAll(climateId,landId)
//       .then(de => {
//         res.render('about/seed-list', {
//           prods: de,
//           pageTitle: 'All Products',
//           path: '/seed-list'
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

  