import axios from 'axios';
const base_url='https://api.9letters.com/api';

export default axios.create({
    method:'post',
    baseURL: base_url,
    headers: { 
        'Authorization': 'NineLetters'
       
      },
      withCredentials: true,
     

});

