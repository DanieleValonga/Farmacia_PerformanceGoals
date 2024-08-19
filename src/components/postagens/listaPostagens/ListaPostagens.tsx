import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagens.css';

function ListaPostagens() {
  const postagens = [
    {
      type: 'farmaco' as 'farmaco', // Assegura que o valor corresponde ao tipo esperado
      title: 'Dipirona',
      description: 'Analgésico, indicado para dor e febre.',
      validade: '05/05/2028'
    },
    {
      type: 'faarmaco' as 'farmaco',
      title: 'Tylenol',
      description: 'Analgésico e antitérmico, indicado para dores e febre.',
      validade: '02/03/2026'
    },
    {
      type: 'intimo' as 'intimo',
      title: 'Absorvente',
      description: 'Alta absorção',
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
