import axios from 'axios';

export const sendHistory = async (
  title: string,
  description: string,
  user: string
) => {
  const data = {
    title,
    description,
    user
  };

  try {
    return await axios.post('https://ola-task.herokuapp.com/posts', data);
  } catch (error) {
    return error;
  }
};
