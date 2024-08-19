import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext'
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema);

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();


    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {

                }
            });
        } catch (error: any) {
            console.error('Erro ao buscar o tema:', error);
            alert('Erro ao buscar o tema');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function retornar() {
        navigate("/temas");
    }

    async function deletarTema() {
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                }
            });

            alert('Tema apagado com sucesso');
        } catch (error) {
            console.error('Erro ao apagar o tema:', error);
            alert('Erro ao apagar o tema');
        }

        retornar();
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o tema a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Tema</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarTema}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarTema;