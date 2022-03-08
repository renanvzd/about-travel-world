import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendHistory } from '../../services/sendHistory';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !description) {
      toast('Verifique se todos os campos foram preenchidos!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendHistory(title, description);
      setTitle('');
      setDescription('');

      toast('História registrada. Aguarde ser publicada!', {
        style: {
          background: theme.secondary,
          color: '#000000'
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
      <button type="submit" disabled={loading}>
        SEND
      </button>
    </FormContainer>
  );
}
