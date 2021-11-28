let {check,validationResult,body}= require('express-validator');

const validations={
    validRegister:[
        check ('name').isLength({min:1}).withMessage('Este campo debe estar completo'),
        check ('mail').isEmail().withMessage('El mail y/o contraseña son incorrectos'),
        check ('password').isLength({min:7}).withMessage('El mail y/o contraseña son incorrectos'),
    ],
    validMovie:[
        check('score').isInt({ min:1, max: 5}).withMessage('El puntaje debe ser del 1 al 5')
    ]
}

module.exports=validations;