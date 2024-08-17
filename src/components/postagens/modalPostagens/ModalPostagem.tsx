import FormularioPostagem from '../formularioPostagem/FormularioPostagem';
import './ModalPostagem.css';

function ModalPostagem() {
  return (
    <div className='modal-postagem-container'>
      <button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>
        Nova postagem
      </button>
      <div className='form-container'>
        <FormularioPostagem />
      </div>
    </div>
  );
}

export default ModalPostagem;