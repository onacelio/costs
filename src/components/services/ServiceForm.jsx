import { useState } from "react"
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"
import styles from "../project/ProjectForm.module.css"

export default function ServiceForm({ handleSubmit, textBtn, projectData }) {

    const [service, setService] = useState([])

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do serviço" 
                placeholder="Insira o nome do serviço" 
                handleOnChange={handleChange} 
                name="name" 
            />

            <Input 
                type="number" 
                text="Custo do serviço" 
                placeholder="Insira o custo do serviço" 
                handleOnChange={handleChange} 
                name="cost" 
            />

            <Input 
                type="text" 
                text="Descrição do serviço" 
                placeholder="Descreva o serviço" 
                handleOnChange={handleChange} 
                name="description" 
            />

            <SubmitButton text={textBtn} />
        </form>
    )
}