export default function CardFilme({filme}) {
    const estiloindexjs = {
       
    }


    const estiloCardFilme ={
        width:"100%",
        height:"100%",
        borderRadius:"8px",
        overFlow:"hidden",
        position:"relative"
    }


    const estiloimagem = {
        width: "100%",
        height:"100%",
        objectFit: "cover",
        opacity: 1,
        transition:"opacity .6s"

};

    const estiloConteinerinfoFilme = {
        color: "white",
        position:"absolute",
        bottom: 0,
        background: 'linear-gradient(rgba(250,0,0,0.1), rgba(250,0,0,0.9))',
        height:'200px',
        width: '100%',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'en',
        padding: '10px'
}
  



    return (
    


        <li style={estiloCardFilme}>
            <img style={estiloimagem} src = {filme.poster}/>

            <div style={estiloConteinerinfoFilme}>

            <p>Titulo: {filme .titulo}</p>
            <p>Ano: {filme .ano}</p>
            <p>Gênero: {filme .genero}</p>
            <p>Nota: {filme .nota}</p>

            </div>

            
        
            
        </li>
    
    );
}
