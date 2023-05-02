export default function Eventos(){
    
    function retornoMensagem(){
        alert('viado')
    }
    
    return(
        <main>
            <button onClick={retornoMensagem}>Mensagem</button>
        </main>
    )
}