// src/components/listaTemas/ListaTemas.tsx
import CardTemas from '../cardTemas/CardTemas';
import './ListaTemas.css';

function ListaTemas() {
  const temas = [
    { title: 'Categoria Farmacos', description: '------' },
    { title: 'Produtos de Beleza', description: '------' },
    { title: 'Produtos de Higiene', description: '-----' }
  ];

  return (
    <div className='lista-temas-container'>
      <div className='lista-temas'>
        <div className='grid-container'>
          {temas.map((tema, index) => (
            <CardTemas
              key={index}
              title={tema.title}
              description={tema.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaTemas;