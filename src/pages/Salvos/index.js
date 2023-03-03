import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';



export default function Salvos(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhalista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhalista) || []);

    }, [])

    function excluirfilme(id){
        const filtroFilmes = filmes.filter((filme) => {
            return( filme.id !== id);
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));

    }
    return(

        <div className='container'>
            <div className='filmessalvos'>
                <h1>Meus filmes</h1>
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <h3>{filme.nome}</h3>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={() => excluirfilme(filme.id)}>Excluir</button>
                        </article>

                    );
                })}
            </div>
        </div>
    );
}