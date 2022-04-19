import axios from 'axios';

const myApi = axios.create({
  baseURL: 'https://mbnaj-articles.herokuapp.com/api/',
});

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticles = (topic) => {
  let path = `/articles`;
  if(topic){path+=`?topic=${topic}`}
  return myApi.get(path).then((res) => {
    return res.data.articles;
  }).catch((err)=>{
    console.log(err,'<==============');
  });
};


export const getCommentsByArticleId = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.items;
  });
};

export const addComment = (article_id,username,body) => {
  return myApi.post(`/articles/${article_id}/comments`,{username: username,body:body}).then((res) => {
    return res.data.item;
  });
};

export const removeCommentById = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return true;
  });
};