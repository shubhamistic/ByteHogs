import { HOST_IP } from './index';
import { request } from './request';

const ENDPOINTS = {
  askGpt: (text) => (`${HOST_IP}/ask-gpt?question=${text}`)
};

export const askGpt = (text) => {
  return request(
    ENDPOINTS.askGpt(text),
    { method: 'GET' }
  );
}