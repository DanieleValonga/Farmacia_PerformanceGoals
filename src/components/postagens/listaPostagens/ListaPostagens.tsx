import CardPostagem from '../cardPostagem/CardPostagem';
import './ListaPostagens.css';

function ListaPostagens() {
  const postagens = [
    {
      type: 'farmaco' as 'farmaco', // Assegura que o valor corresponde ao tipo esperado
      title: 'Dorflex',
      description: 'Dorflex é um medicamento utilizado para alívio da dor e desconforto muscular.',
      validade: '15/07/2027'
    },
    {
      type: 'beleza' as 'beleza',
      title: 'Protetor Solar',
      description: 'Protetor solar para proteção da pele contra os danos solares.',
      validade: '10/12/2025'
    },
    {
      type: 'higiene' as 'higiene',
      title: 'Sabonete Líquido',
      description: 'Sabonete líquido para limpeza e cuidado diário da pele.',
      validade: '22/11/2024'
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
