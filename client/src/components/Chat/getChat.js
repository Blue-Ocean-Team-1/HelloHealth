import axios from 'axios';

export default function getChat() {
  axios
    .get('http://localhost:8001/chat')
    .then((results) => results)
    .catch((err) => {
      console.error(err);
    });
}
