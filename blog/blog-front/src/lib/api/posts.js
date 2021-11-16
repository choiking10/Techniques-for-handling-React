import client from './clinet';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });
