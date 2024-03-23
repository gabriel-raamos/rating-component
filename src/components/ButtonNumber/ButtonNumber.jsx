export default function ButtonNumber(prop) {
    return (
        <button 
            className="rounded-full text-lg btn-size-75 btn-size-50 md:h-16 md:w-16 justify-center items-center bg-darkGray hover:bg-mediumGray focus:bg-orange hover:-translate-y-3 duration-500" 
            onClick={prop.onClick} 
            type="button"
        >
            {prop.number}
        </button>
    )
}