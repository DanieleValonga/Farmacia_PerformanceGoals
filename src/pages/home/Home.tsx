import { useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';

function Home() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/postagens'); // Altere '/postagens' para o caminho correto das suas postagens
    };

    return (
        <>
            <div className="bg-blue-900 flex justify-center">
                <div className='container text-white'>
                    <div className="text-container">
                        <h2 className='text-5xl font-bold'>Bem Vindes</h2>
                        <p className='text-xl'>Mais que uma farmácia, seu porto seguro!</p>
                        <p className='text-xl'>Sua saúde é nossa prioridade.</p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleButtonClick}
                                className='rounded-full bg-white text-blue-800 py-2 px-6 hover:bg-green-600 hover:text-white transition duration-300 shadow-lg transform hover:scale-105'>
                                Ver postagens
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={logo} alt="Logo da farmácia" className='w-full max-w-lg' />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;