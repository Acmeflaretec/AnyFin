const { Router } = require('express');
const router = Router();
 const { getService, addService, deleteService,getServiceById,
  updateService, } = require('../controllers/serviceController');
const { upload } = require('../middlewares/multer');

router.get('/', getService);
router.post("/",upload.single('image'), addService);
router.delete("/", deleteService);
router.get('/:id', getServiceById);
router.patch("/",upload.single('image'),updateService);

module.exports = router;
