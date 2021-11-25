import { Container } from "./style";
import {useState} from "react";
import axios from "axios";


export default function Form() {

    const [numero,setNumero] = useState('');
    const [mensagem,setMensagem] = useState('');
    const [resposta,setResposta] = useState('')

    async function postSms (numero:string,mensagem:string){
        let res = await axios.post("http://10.10.10.84/api/send_sms/",{
            
            params:{
                "text": mensagem,"param":
                [
                    {"number":numero}
                ]
            },
            auth:{
                username:"admin",
                password:"w9t5Re34D"
            }
            

        })
        
        return setResposta(res.data)

    }

    function enviarSms(e:any){
        e.preventDefault()
        postSms(numero,mensagem)
        setTimeout(limpar, 1000)
        
    }

    function limpar(){
        setMensagem('')
        setNumero('')
    }

   
    return (
        <Container>
            <form>
                <div>
                    <p>Numero de Telefone: </p>
                    <input  
                    id="numero" 
                    onChange={(e)=> setNumero(e.target.value)}
                    value={numero}
                    required
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

                <div>
                    <input id={"enviar"} type="submit" placeholder="Enviar" onClick={enviarSms}/>
                </div>
               
            </form>
            <br/>

            <h2>{resposta}</h2>
        </Container>
    )

}