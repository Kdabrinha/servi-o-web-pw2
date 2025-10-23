import {filmes} from "../data/filmes.js"
import CardFilme from '../componentes/CardFilme'



function Home (){
  
    
    const estilolistaCard = {
        display: "grid",
        gridTemplateColumns : "repeat(auto-fit, minmax(200px, 1fr))",
        gap:"16px",
        listStyle: "none",
        background:'black'
    };
    
    return <> 
       
        <h1 color="red">Filmes</h1>
        
        <ul style={estilolistaCard} >
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