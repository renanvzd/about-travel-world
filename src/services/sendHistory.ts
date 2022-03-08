import axios from 'axios';

export const sendHistory = async (
  title: string,
  description: string,
) => {
  const data = {
    title,
    description,
    type: 'OTHER',
    user: { id: '11' }
  };

  try {
    return await axios.post('https://ola-task.herokuapp.com/posts', data);
  } catch (error) {
    return error;
  }
};
