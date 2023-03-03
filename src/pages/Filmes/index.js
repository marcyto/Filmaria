import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './filme.css';

export default function Filmes(){
    const { id } = useParams();
    const history = useHistory();

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if(response.data.lenght === 0){
                history.replace('/');
                return;
            }

            setFilme(response.data)
            setLoading(false);
        }
        loadFilme();

        return() => {
            console.log('componente desmontado');
        }

    }, [history, id])

    function Salvafilme(){

        const minhalista = localStorage.getItem('filmes');
        let filmesSalvos= JSON.parse(minhalista) || [];
        //verificar se tem algum filme salvo com o mesmo ID

        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id);

        if(hasFilme){
            alert('Voce ja possui esse filme salvo')
            return;
            //para a execucao do codigo aqui.
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        alert('filme salvo com sucesso');


    }

    if(loading){
        return(
            <div>
                <h1>Carregando seu Filme...</h1>
            </div>
        );
    }

    return(

        <div className='container'>
            <div className='detalheFilme'>
                <h1>{filme.nome}</h1>
                <img src={filme.foto}/>
                <p><strong>Sinopse</strong><br/><br/>{filme.sinopse}</p> 
                <div className='botoes'>
                    <button onClick={Salvafilme}>Salvar</button>
                    <button>
                        <a href={`https://www.youtube.com/results?search_query=${filme.nome}`}>
                            Trailer
                        </a>
                    </button>
                </div>           
            </div>
        </div>
    );
}