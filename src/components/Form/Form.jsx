import Star from '../IconComponents/Star'
import ButtonNumber from '../ButtonNumber/ButtonNumber'

export default function Form(prop) {

    const changeSelected = (index) => {
        // prop.setSelected(prevIndex => (prevIndex === index ? null : index))

        if (prop.buttonSelected !== null && prop.buttonSelected === index) {
            prop.setSelected(null)
            // Desseleciona o botão se já estiver selecionado
            console.log(prop.buttonSelected)
        } else {
            prop.setSelected(index+1)
            // Seleciona o botão se não estiver selecionado
            console.log(prop.buttonSelected)
        }
    }

    const handleSubmit = (e) => {

        console.log(prop.buttonSelected)

        e.preventDefault()
        if (prop.buttonSelected === null) {
            console.log('Please select a number before submitting.')
        } else {
            console.log('Form submitted.')
            prop.onSubmit()
        }
    }

    const buttons = [
        {
            number: 1
        },
        {
            number: 2
        },
        {
            number: 3
        },
        {
            number: 4
        },
        {
            number: 5
        },
    ]

    return (
        <form className='' >

            <div className='m-3' >
                <button className='rounded-full bg-darkGray p-3 mb-3 cursor-default' >
                    <Star />
                </button>


                <h1 className="text-xl font-bold my-3" >How did we do?</h1>

                <p>
                    Please let us know how we did with your support request.
                    All feedback is appreciated to help us improve our offering!
                </p>
            </div>

            <div className='flex w-full justify-between my-5' >

                {buttons.map(
                    (button, index) =>
                        <ButtonNumber
                            key={index}
                            number={button.number}
                            onClick={() => changeSelected(index)}
                        />)
                }

            </div>

            {/* <div className='justify-center  flex' >
                <ButtonSubmit />
            </div> */}

            <div className='justify-center flex' >
                <button
                    className="bg-orange text-white hover:bg-white hover:text-orange duration-500 p-4 my-3 w-screen rounded-full"
                    type="submit"
                    onClick={handleSubmit}
                >
                    SUBMIT
                </button>
            </div>

        </form>
    )
}