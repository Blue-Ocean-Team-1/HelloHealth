import axios from 'axios';

export default function getChat() {
  axios
    .get('/chat')
    .then((results) => results)
    .catch((err) => {
      console.error(err);
    });
}
