import Link from 'next/link';
import { ItemContainer } from './styles';

interface ExperienciaProps {
  title: string;
  description: string;
  link: string;
}

export default function ExperienciaItem({ title, description, link }: ExperienciaProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <Link href={link}>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div>
            <p>Saiba mais...</p>
          </div>
        </div>
      </Link>
    </ItemContainer>
  );
}
