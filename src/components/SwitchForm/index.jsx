import {useState} from "react";

const SwitchForm = ({props}) => {
    const [switched, setSwitched] = useState(false)
    return <button
        onClick={() => setSwitched(!switched)}
        className={'flex relative p-1 items-center justify-between flex-row w-[200px] border-2 border-dark-blue rounded'}
        {...props}
    >
        <span className={`px-2 z-10 ${switched ? 'text-dark-blue' : 'text-white'}`}>Фіз.особа</span>
        <span className={`px-2 z-10 ${!switched ? 'text-dark-blue' : 'text-white'}`}>Юр.особа</span>
        <span className={`transition-all ease duration-300 absolute block w-1/2 bg-dark-blue h-full top-0 z-0 left-0 ${switched && 'translate-x-[100%]'}`}></span>
    </button>
}

export default SwitchForm;