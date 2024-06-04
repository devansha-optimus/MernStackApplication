const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});
router.get(':/id', (res, req) => {
     res.json({
        message: 'get a single workout'
    });
})
router.post('/', (res, req) => {
     res.json({
        message: 'post a new  workout'
    });
})

router.delete('/:id', (res, req) => {
     res.json({
        message: 'delete a   workout'
    });
})
// update a workout 
router.patch('/:id', (res, req) => {
     res.json({
        message: 'update a  workout'
    });
})


module.exports = router;