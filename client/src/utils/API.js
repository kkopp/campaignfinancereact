import axios from "axios";

export default {
  getQuiz: function() {
    return axios.get("quizController.findAll");
  },

//   getBreedList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   },

//   getOneBreed: function(breedKey) {
//     return axios.get(`https://dog.ceo/api/breed/${breedKey}/images`)
//   }
}