const express = require('express');
const router = express.Router();



router.get('/' , (req , res , next)=>{
    res.status(200).json({
        message: "oreder get requests..."
    });
});

router.get('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling GET requests to /orders',
        id: id
    });
});

router.patch('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling Update requests to /orders',
        id: id
    });
});

router.delete('/:productId' , (req , res , next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: 'Handling Delete requests to /orders',
        id: id
    });
});

router.post('/' , (req , res , next)=>{
    res.status(200).json({
        message: 'Handling Posts requests to /orders'
    });
});





module.exports = router;
