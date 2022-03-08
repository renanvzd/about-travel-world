import { useEffect, useState } from 'react';
// import Form from './Form';
import { Container } from './styles';

type Repository = {
  title: string;
  description: string;
}


function FormHistory() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://ola-task.herokuapp.com/posts')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
      })
  }, [])

  return (
    <Container>
      <ul>
        {repositories.map(repo => {
          return (
            <li key={repo.title}>
              <strong>{repo.title}</strong>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>

    </Container>
  );
}

export default FormHistory;
