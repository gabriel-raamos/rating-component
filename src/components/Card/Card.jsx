import { useState } from 'react'
import Form from '../Form/Form'
import SubmittedState from '../SubmittedState/SubmittedState'

export default function Card() {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [selected, setSelected] = useState(null)

    // Function to update selected button
  const handleButtonSelected = (index) => {
    setSelected(index);
  };

    const handleFormSubmit = () => {
        setFormSubmitted(!formSubmitted)
    }

    return (
        <div className="bg-darkBlue text-white rounded-xl p-5 m-auto max-w-xs md:max-w-lg">

            {!formSubmitted ? <Form onSubmit={handleFormSubmit} buttonSelected={selected} setSelected={handleButtonSelected} /> : <SubmittedState selectedButton={selected} /> }

        </div>
    )
}