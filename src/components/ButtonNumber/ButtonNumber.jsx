export default function ButtonNumber(prop) {
    return (
        <button 
            className="rounded-full text-lg p-5 m-3 bg-darkGray hover:bg-mediumGray focus:bg-orange hover:-translate-y-3 duration-500" 
            onClick={prop.onClick} 
            type="button"
        >
            {prop.number}
        </button>
    )
}