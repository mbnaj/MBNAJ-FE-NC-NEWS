import axios from 'axios';

const myApi = axios.create({
  baseURL: 'https://mbnaj-articles.herokuapp.com/api/',
});

export const fetchTopics = () => {
  return myApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const fetchArticles = (topic,p,limit=5,sort_by,order,q) => {
  let sortbyColumns = [
    "title",
    "article_id",
    "created_at",
    "votes",
    "comment_count",
    "author",
  ];

  let path = `/articles`;
  if (sortbyColumns.includes(sort_by) === false) {
    sort_by = "created_at";
  }
  //if(!limit){limit=5}
  //if(limit){path+=`?limit=${limit}`}
  //if(topic){path+=`&topic=${topic}`}
  //if(p){path+=`&p=${p}`}
  
  return myApi.get(path,{ params: { 'limit': limit,'order':order,'topic':topic,'p':p ,'sort_by':sort_by,'q':q} }).then((res) => {
    return res.data;
  }).catch((err)=>{
  });
};

export const getArticleId = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const addComment = (article_id,username,body) => {
  return myApi.post(`/articles/${article_id}/comments`,{username: username,body:body}).then((res) => {
    return res.data.comment;
  });
};

export const removeCommentById = (comment_id) => {
  return myApi.delete(`/comments/${comment_id}`).then((res) => {
    return true;
  });
};
export const patchCommentById = (comment_id,inc_votes) => {
  return myApi.patch(`/comments/${comment_id}`,{'inc_votes':inc_votes}).then((res) => {
    return res.data.comment;
  });
};

export const patchArticleById = (article_id,inc_votes) => {
  return myApi.patch(`/articles/${article_id}`,{'inc_votes':inc_votes}).then((res) => {
    return res.data.article;
  });
};