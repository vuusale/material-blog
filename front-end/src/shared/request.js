import axios from "axios";
import { backendURL } from "./constants";

const instance = axios.create({
  baseURL: backendURL,
  withCredentials: true,
});

instance.interceptors.response.use(
  response => response.data,
  error => error.response.data
);

function getSections() {
  return instance.get("/sections");
}

function getArticles(sectionId) {
  return instance.get(`/sections/${sectionId}`);
}

function getArticle(articleId) {
  return instance.get(`/article/${articleId}`);
}

function getCommentsOfArticle(articleId) {
  return instance.get(`/comment/${articleId}`);
}

function postComment(title, content, articleId) {
  return instance.post(`/comment/${articleId}`, {title, content});
}

function login(username, password) {
  return instance.post(`/auth/login`, {username, password});
}

function register(username, email, password, passwordConfirmation, role) {
  return instance.post(`/auth/register`, {username, email, password, passwordConfirmation, role});
}

export { 
  getSections, 
  getArticles,
  getArticle,
  getCommentsOfArticle,
  postComment,
  login,
  register,
};
