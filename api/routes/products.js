const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


const { IgApiClient } = require('instagram-private-api');

const ig = new IgApiClient();

const Product = require('../models/Product');

router.get('/' , (req , res , next)=>{
    Product.find((err , result)=>{
        res.status(200).json({
            data: result
        });
    });
});

router.get('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    Product.findById(id)
    .then(result=>{
        if(result)
        {
            res.status(200).json({
                data: result
            });
        }else{
            res.status(400).json({
                message: 'id is not found'
            });
        }
    }).catch(err=>{
        res.status(400).json({
            data: err
        });
    })
});

router.patch('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling Update requests to /products',
        id: id
    });
});

router.delete('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).json({
            message: 'deleted successfully!!'
        });
    }).catch(err=>{
        res.status(200).json({
            message: err.message
        })
    });
});


router.post('/' , (req , res , next)=>{
    const product = new Product({
        price: req.body.price,
        name: req.body.name,
        _id: new mongoose.Types.ObjectId
    });
    product.save()
    .then(result=>{
        console.log(result);
    }).catch(error=>{
        console.log(error);
        });
    res.status(200).json({
        message: 'Handling Posts requests to /products',
        product: product
    });
});


//21:43  --- 6

module.exports = router;