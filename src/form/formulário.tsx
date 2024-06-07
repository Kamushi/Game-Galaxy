import { useState } from "react";
import './formulário.css'


function formulário (){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


return (
    <div className="con7">
        <h1 className="fromulário"></h1>
        
            <h1> nos avalie</h1>

        <form className="from" onSubmit= {() => {}}>
            <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName (e.target.value)}
            value={name}
            />
        

        <input
        className="input"
        type="text"
        placeholder="Digite seu Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <textarea
      className="textarea"
      placeholder="Digite sua mensagem..."
      onChange={(e) => setMessage(e.target.value)}
        value={message}
        />
            <input className="button" type="submit" value="Enviar" />
        </form>

    </div>
    )
}

export default formulário;
