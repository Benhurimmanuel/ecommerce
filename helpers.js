const joi = require('joi');


const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
});

const ratingSchema = joi.object({
    rating: joi.number().greater(0).less(6).required(),
});


module.exports = { productSchema, ratingSchema };


// const joi = require('joi');

// const payloadSchema = joi.object({
//   firstName: joi.string().alphanum().max(50).required(),
//   lastName: joi.string().alphanum().max(50),
//   address: joi.string().alphanum().max(200),
//   email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
//   phoneNumber: joi.number().required(),
// });
// const idSchema = joi.object({
//   id: joi.string().min(30).max(100).required(),
// });
// const updateSchema = joi.object({
//   firstName: joi.string().alphanum().max(50),
//   lastName: joi.string().alphanum().max(50),
//   address: joi.string().alphanum().max(200),
//   email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }),
//   phoneNumber: joi.number(),
// });
// module.exports = { payloadSchema, idSchema, updateSchema };
