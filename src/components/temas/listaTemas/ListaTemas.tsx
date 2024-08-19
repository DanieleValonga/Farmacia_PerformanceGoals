// src/components/listaTemas/ListaTemas.tsx
import CardTemas from '../cardTemas/CardTemas';
import './ListaTemas.css';

function ListaTemas() {
  const temas = [
    { title: 'Categoria Farmacos', description: 'remédios, voltados para tratamento de problemas de saúde' },
    { title: 'Produtos de Beleza', description: 'produtos estéticos, para elevar auto-estima' },
    { title: 'Produtos de Higiene', description: 'produtos de cuidado higiênico' }
    { title: 'Produtos de cuidado íntimo', description: 'produtos voltados para cuidado íntimo' }
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