import React, {useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function NewIncident () {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')

    async function handleCreate(e){
        e.preventDefault()
        const data = {
            title,
            description,
            value,
        }

        await api.post('incidents', data, {
            headers: {
            Authorization: ongId
        }})
        history.push('/profile')
    }

    return ( 
        <div className="newIncident-container">
        <div className="container">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastrar Novo Caso</h1>
                <p>Descreva o novo caso detalhadamente para encontrar um herói para resolver isso.</p>
                <Link className="back-link" to='/profile'>
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
            </section>

            <form onSubmit={handleCreate}>
                <input placeholder="Titulo do caso" value={title}
                onChange={e => setTitle(e.target.value)} />
                <textarea placeholder="Descrição do caso" value={description}
                onChange={e => setDescription(e.target.value)} />
                <input placeholder="Valor em reais" value={value}
                onChange={e => setValue(e.target.value)} />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}

export default NewIncident