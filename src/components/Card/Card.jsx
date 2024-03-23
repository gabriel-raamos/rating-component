import { useState } from 'react'
import Form from '../Form/Form'
import SubmittedState from '../SubmittedState/SubmittedState'

export default function Card() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selected, setSelected] = useState(null)

    // Função para atualizar o botão selecionado
  const handleButtonSelected = (index) => {
    setSelected(index);
  };

    const handleFormSubmit = () => {
        setFormSubmitted(!formSubmitted)
        console.log(formSubmitted)
    }

    return (
        <div className="bg-darkBlue text-white rounded-xl p-5 m-auto max-w-lg">

            {!formSubmitted ? <Form onSubmit={handleFormSubmit} buttonSelected={selected} setSelected={handleButtonSelected} /> : <SubmittedState selectedButton={selected} /> }

            {/* <p>{selected}</p> */}
        </div>
    )
}