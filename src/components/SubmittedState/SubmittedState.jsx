import ThankYou from '../IconComponents/ThankYou'

export default function SubmittedState(prop) {
    return (
        <section className='p-5'>

            <div className="m-5 grid">
                <div className='grid-cols-3 col-start-2'>
                    <ThankYou />
                </div>
            </div>

            <div className='grid justify-center content-center' >
                <p className='p-3 px-5 m-3 rounded-full font-bold bg-darkGray text-orange' >You selected {prop.selectedButton} out of 5</p>
            </div>

            <div className='flex justify-center my-5'>
                <h1 className='text-4xl' >Thank you!</h1>
            </div>

            <div className='flex justify-center text-center text-lightGray max-w-sm' >
                <p className='my-3' >
                    We appreciate you taking the time to give a rating.
                    If you ever need more support, dont hesitate to get in touch!
                </p>
            </div>

        </section>
    )
}