import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import './login.css'


const login = () =>{
    const [username, setusername] = useState("")
    const[password, setpasswrd] = useState("")

    const handleSubmite = () =>{   
        alert ("enviando os dados:" + username + "-" + password);
    }

    return (
        <div className='con8'>
            <form onSubmit={handleSubmite}>
                <h1>Acesse o sistema</h1>
                <div>
                <input 
                type='email'
                placeholder='E-mail'
                required
                onChange={(e) => setusername(e.target.value)}/>
                <FaUser className="icon"/>
                 </div>
                <div>
                 <input type='passwor'placeholder='senha' 
                 onChange={(e) => setpasswrd(e.target.value)}/>
                 <FaLock className='icon'/>
                </div>

                <div className='recall-forget'>
                        <label>
                            <input type= "checkbox"/>
                            Lembre de mim
                        </label>
                        <a href="#">Esqueceu sua senha?</a>
                    </div>
                <div>
                    <button>Entrar</button>
                </div>
                    <div className='sigunp-link'/>
                    <p>Ainda não tem uma conta? <a href='#'>Registrar</a></p>
            </form>
        </div>
        
    )
}

export default login