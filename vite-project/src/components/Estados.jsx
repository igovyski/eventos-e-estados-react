import { useState } from 'react'

export default function Estados(){
    const [numero, setNumero] = useState(1)

    function handleAumentar(){
        setNumero(numero+0.00000000001)
    }

    const [texto, setTexto] = useState('PH VIADO')

    function handleMudar(){
        setTexto('CAIO GAY')
    }


    return(
        <>
            <section>
                <h2>Numero: {numero}</h2>
                <button onClick={handleAumentar}>Aumentar</button>
            </section>
            <section>
                <h2>Texto: {texto} </h2>
                <button onClick={handleMudar}>Mudar</button>
            </section>
        </>
    )
}