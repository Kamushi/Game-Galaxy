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
                <div className="Fl">
                    <h1>Faça Login</h1>
                        </div>
                <div className="login-form">
                    <div className="input">
                        <input
                        type='email'
                        placeholder='E-mail'
                        required
                        onChange={(e) => setusername(e.target.value)}/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="input2">
                        <input type='passwor'placeholder='senha' 
                        onChange={(e) => setpasswrd(e.target.value)}/>
                        <FaLock className='icon'/>
                    </div>
                </div>

                <div className='recall-forget'>
                    <label>
                        <input type= "checkbox"/>
                        <a>Lembre de mim</a>
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