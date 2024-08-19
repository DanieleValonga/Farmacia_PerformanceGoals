// src/components/cardTemas/CardTemas.tsx
import { Link } from 'react-router-dom';
import './CardTemas.css';

interface CardTemasProps {
  title: string;
  description: string;
}

function CardTemas({ title, description }: CardTemasProps) {
  return (
    <div className='card-temas'>
      <header className='card-header'>{title}</header>
      <p className='card-description'>{description}</p>
      <div className="card-actions">
        <Link to='/editar' className='card-button edit-button'>
          <button>Editar</button>
        </Link>
        <Link to='/deletar' className='card-button delete-button'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTemas;