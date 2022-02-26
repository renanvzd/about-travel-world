import { Parallax } from 'react-parallax';
import { ParallaxContainer } from './styles';

interface ExperienciaProps {
  backgroundImage: string;
  // description: string;
}

export default function ParallaxItem({ backgroundImage }: ExperienciaProps) {
  return (
    <ParallaxContainer>
      <div>
        <Parallax
          className='image'
          blur={0}
          bgImage={backgroundImage}
          strength={-600}
          bgImageStyle={
            {
              // height: '80vh',
              maxWidth: '100%',
              opacity: '0.8',
              objectFit: 'contain',
              backgroundPosition: 'top',
              // backgroundRepeat: 'no-repeat'
            }
          }
        >
        </Parallax>
      </div>

    </ParallaxContainer >
  );
}
