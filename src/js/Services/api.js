import axios from 'axios';
export default backendAPI;
axios.defaults.baseURL = `https://books-backend.p.goit.global/books`;

const backendAPI = {
  getCategoryList: async function () {
    try {
      const response = await axios.get(`/category-list`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBestSellers: async function () {
    try {
      const response = await axios.get(`/top-books`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getSelectedCategory: async function (category) {
    try {
      const response = await axios.get(`/category?category=${category}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  getBookDescription: async function (id) {
    try {
      const response = await axios.get(`/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
