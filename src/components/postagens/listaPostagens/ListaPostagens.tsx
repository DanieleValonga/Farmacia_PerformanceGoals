import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagens.css';

function ListaPostagens() {
  const postagens = [
    {
      type: 'farmaco' as 'farmaco', // Assegura que o valor corresponde ao tipo esperado
      title: 'Dipirona',
      description: '-----',
      validade: '05/05/2028'
    },
    {
      type: 'beleza' as 'beleza',
      title: 'Tylenol',
      description: '-----',
      validade: '02/03/2026'
    },
    {
      type: 'higiene' as 'higiene',
      title: 'Absorvente',
      description: '-----',
      validade: '20/09/2027'
    }
  ];

  return (
    <div className='lista-postagens-container'>
      <div className='lista-postagens'>
        <div className='grid-container'>
          {postagens.map((postagem, index) => (
            <CardPostagem
              key={index}
              type={postagem.type}
              title={postagem.title}
              description={postagem.description}
              validade={postagem.validade}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaPostagens;
