import { Link } from 'react-router-dom';
import './CardPostagem.css';

interface CardPostagemProps {
  type: 'farmaco' | 'beleza' | 'higiene' | 'intimo';
  title: string;
  description: string;
  validade: string;
}

function CardPostagem({ type, title, description, validade }: CardPostagemProps) {
  const cardClass =
    type === 'farmaco' && title === 'Dipirona' ? 'card-postagem dipirona' :
    type === 'farmaco' && title === 'Tylenol' ? 'card-postagem tylenol' :
    type === 'intimo' && title === 'Absorvente' ? 'card-postagem absorvente' :
    'card-postagem';

  return (
    <div className='card-postagem-container'>
      <div className={cardClass}>
        <div className='card-header bg-indigo-400 py-2 px-4 flex items-center gap-2'>
          <div className='image-container'>
          </div>
          <h3 className='text-lg font-bold text-white'>{title}</h3>
        </div>
        <div className='card-body p-4'>
          <h4 className='text-lg font-semibold text-gray-800'>{type === 'farmaco' ? 'Tylenol' : 'Produto'}</h4>
          <p className='text-gray-600 mt-1'>{description}</p>
          {type === 'farmaco' && <p className='text-gray-600 mt-1'>Farmaco</p>}
          <p className='text-gray-600 mt-1'>Validade: {validade}</p>
        </div>
        <div className='card-footer flex'>
          <Link to='' className='w-full'>
            <button className='w-full py-2 bg-indigo-500 text-white hover:bg-indigo-700 rounded-none'>Editar</button>
          </Link>
          <Link to='' className='w-full'>
            <button className='w-full py-2 bg-red-500 text-white hover:bg-red-700 rounded-none'>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardPostagem;