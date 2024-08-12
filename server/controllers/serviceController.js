const Service = require('../models/service')
const Product = require('../models/product')
const fs = require('fs')

const getService = async (req, res) => {
  try {
    const data = await Service.find().sort({createdAt:-1});
    res.status(200).json({ data })
  } catch (error) {
    console.log(error);
  }
};

const addService = async (req, res) => {
  const { heading,subheading, desc,bulletin } = req?.body
  // console.log('bulletin',typeof(bulletin));
  
  const image = req?.file?.filename
  try {
    
    
      const cat = new Service({heading,subheading, desc,bulletin, image })   
      await cat.save()
      res.status(201).json({ data: cat, message: 'Service created successfully' });
    
  } catch (error) {
    console.log(error);
  }
}

const deleteService = async (req, res) => {
  try {
    const id = req.query.id;

      const data = await Service.deleteOne({ _id: id }); 
      if (data.image) {
        fs.unlink(`public/uploads/${data.image}`, (err) => {
          if (err) {
            console.error('Error deleting image:', err);
          } else {
            console.log('Image deleted successfully.');
          }
        });
      }

      res.status(200).json({ message: 'Service deleted successfully' });
    
  } catch (error) {
    console.error('Error deleting Service:', error);
    res.status(500).json({ message: 'An error occurred while deleting the Service' });
  }
};


const getServiceById = async (req, res) => {
  try {
    const data = await Service.findOne({ _id: req.params.id });
    res.status(200).json({ data, message: 'product found successfully' });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error?.message ?? "Something went wrong !" });
  }
}
const updateService = async (req, res) => {
  
  const {_id, heading,subheading,bulletin, desc,isAvailable} = req?.body
  const image = req?.file?.filename
  console.log(req.body)
  try {
    const data = await Service.findById(_id);
    console.log(data)
    if (!data) {
      return res.status(404).json({ message: 'Service not found' });
    }
    if (image) {
      fs.unlink(`public/uploads/${data?.image}`, (err) => {
        if (err) {
          console.error('Error deleting image:', err);
          return;
        }
        console.log('Image deleted successfully.');
      });
    }
    await Service.updateOne({ _id }, {
      $set: {  heading,subheading,desc,isAvailable,bulletin, ...(image && { image }) }
    })
    res.status(200).json({ data, message: 'Service updated successfully' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error?.message ?? 'Something went wrong' })
  }
}

module.exports = {
    getService,
    addService,
    deleteService,
    getServiceById,
    updateService,
  }