// src/components/listaTemas/ListaTemas.tsx
import CardTemas from '../cardTemas/CardTemas';
import './ListaTemas.css';

function ListaTemas() {
  const temas = [
    { title: 'Categoria Farmacos', description: 'Produtos farmacêuticos essenciais para tratamentos e cuidados médicos.' },
    { title: 'Produtos de Beleza', description: 'Itens para cuidados e embelezamento pessoal, incluindo maquiagens e cosméticos.' },
    { title: 'Produtos de Higiene', description: 'Produtos destinados à limpeza e manutenção da saúde pessoal, como sabonetes e desodorantes.' }
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