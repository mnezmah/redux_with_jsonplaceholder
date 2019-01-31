import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch =>  {
    //dispatch acts as resolver in promise
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => 
      dispatch({ //posts can be called 'data' of whatever we like
        type: FETCH_POSTS, 
        payload: posts
      })
    );
};

export const createPost = (postData) => dispatch =>  {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers:  {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({ //posts can be called 'data' of whatever we like
      type: NEW_POST, 
      payload: post
    })
  );
};