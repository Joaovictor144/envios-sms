import { Container } from "./style";
import {useState} from "react"

export default function Form() {
   
    const [numero,setNumero] = useState('');
    const [mensagem,setMensagem] = useState('');
    return (
        <Container>
            <form>
                <div>
                    <p>Numero de Telefone: </p>
                    <input  
                    id="numero" 
                    onChange={(e)=> setNumero(e.target.value)}
                    value={numero}
                    />
                </div>
                
                <div>
                    <p>Texto:</p>
                    <textarea 
                    rows={15} 
                    cols={33} 
                    required 
                    id="mensagem"
                    onChange={(e)=> setMensagem(e.target.value)}
                    value={mensagem}
                    />
                </div>
                {console.log(mensagem,numero)}
            </form>
        </Container>
    )

}