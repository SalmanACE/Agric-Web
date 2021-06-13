const mongodb = require("mongodb");
const getDb = require('../util/database').getDb;

class SortDetails
{
    constructor(seed,image,climate,land,desc,market,fertilizer,natural,irrigation,harvesting,id,userId)
    {
        this.seed=seed;
        this.image=image;
        this.climate=climate;
        this.land=land;
        this.desc=desc;
        this.market=market;
        this.fertilizer=fertilizer;
        this.natural=natural;
        this.irrigation=irrigation;
        this.harvesting=harvesting;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.userId = userId;
    }
    save()
    {
        const db = getDb();
        let dbOp;
        if (this._id) {
            // Update the product
            dbOp = db
              .collection('field')
              .updateOne({ _id: this._id }, { $set: this });
          } else {
            dbOp = db.collection('field').insertOne(this);
          }
          return dbOp
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
    }
  
    static fetchAll(climateId,landId) {
        const db = getDb();
        return db
          .collection('field')
          .find({climate : climateId},{land : landId})
          .toArray()
          .then(field => {
            console.log(field);
            return field;
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      static findById(climateId,landId,deId) {
        const db = getDb();
        return db
          .collection('field')
          .find({climate : climateId},{land : landId},{_id: new mongodb.ObjectId(deId)}) //_id: new mongodb.ObjectId(deId)
          .next()
          .then(de => {
            console.log(de);
            return de;
          })
          .catch(err => {
            console.log(err);
          });
      }
    
      static deleteById(deId) {
        const db = getDb();
        return db
          .collection('field')
          .deleteOne({ _id: new mongodb.ObjectId(deId) })
          .then(result => {
            console.log('Deleted');
          })
          .catch(err => {
            console.log(err);
          });
      }
      
}



module.exports = SortDetails;


 

{/* <p class="product__description">
<%= de.desc %>
</p> */}