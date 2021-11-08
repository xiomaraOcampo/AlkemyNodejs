let {check,validationResult,body}= require('express-validator');

const validations={
    validRegister:[
        check ('name').isLength({min:1}).withMessage('Este campo debe estar completo'),
        check ('mail').isEmail().withMessage('El mail y/o contraseña son incorrectos'),
        check ('password').isLength({min:6}).withMessage('El mail y/o contraseña son incorrectos'),
    ]
}

module.exports=validations;