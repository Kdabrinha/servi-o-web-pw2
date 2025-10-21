import {filmes} from "../data/filmes.js"

function CardFilme({filme}) {
    const estiloimagem = {width: "300px"};

    return (
    
        <li >
            <p>Titulo: {filme .titulo}</p>
            <p>Ano: {filme .ano}</p>
            <p>Gênero: {filme .genero}</p>
            <p>Nota: {filme .nota}</p>

            <img style={estiloimagem} src = {filme.poster}/>
        </li>
    
    );
}


function Home (){
    
    
    return <> 
        <h1>Filmes</h1>
        
        <ul>
            {
                filmes.map(( filme )=> {
                    return (
                        <CardFilme key = {`card-filme-${ filme.id}`} filme={filme}/>
        
                    );
                })
            }


          
        </ul>
    </>


}

export default Home; 