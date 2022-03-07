import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendHistory } from '../../services/sendHistory';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('1');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !description) {
      toast('Please make sure all fields are filled in correctly!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendHistory(title, description, user);
      setTitle('');
      setDescription('');
      setUser('');

      toast('Message sent!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Título"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <TextArea
        placeholder="Descrição"
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />
      <Input
        placeholder="User"
        value={user}
        onChange={({ target }) => setUser(target.value)}
      />
      <button type="submit" disabled={loading}>
        SEND
      </button>
    </FormContainer>
  );
}
