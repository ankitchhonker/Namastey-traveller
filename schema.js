const joi = require('joi');

const listingSchema = joi.object({
     listing:joi.object({
        title: joi.string().required(),
         description:joi.string().required(),
         price:joi.number().required(),
         image: joi.string(),
         location:joi.string().required(),
         country:joi.string().required(),
         category:joi.string().required()
     }).required()
});

module.exports = {listingSchema};

const reviewSchema = joi.object({

     reviews: joi.object({
          rating: joi.number().required().min(1).max(5),
          comment: joi.string().required().min(4)
      }).required()
     
     
 })
 
 module.exports = { reviewSchema };
