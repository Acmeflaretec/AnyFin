import request from "utils/request";

const addCategory = async (data) => request(`/service`, 'POST', data)
const editCategory = async (data) => request(`/service`, 'PATCH', data)
const deleteCategory = async (data) => request(`/service?id=${data?._id}`, 'DELETE', data)
const getCategoryById = async (data) => request(`/service/${data?.id}`, 'GET', data)

const addProduct = async (data) => request(`/products`, 'POST', data)
const updateProduct = async (data) => request(`/products`, 'PATCH', data)
const deleteProduct = async (data) => request(`/products/${data?._id}`, 'DELETE', data)
const getCategory = async (data) => request(`/service?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getProducts = async (data) => request(`/products?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getProductById = async (data) => request(`/products/${data?.id}`, 'GET', data)

export {
  addCategory,

  getCategoryById,
  editCategory,
  deleteCategory,

  addProduct,
  updateProduct,
  deleteProduct,
  getCategory,
  getProducts,
  getProductById
};
