const Input = ({label, props}) => {
    return <div className={'flex flex-col items-start px-2 py-4 grow'}>
        <label className={'text-sm text-gray font-bold'}>{label}</label>
        <input type="text" className={'bg-light-gray p-2 w-full rounded'} {...props}/>
    </div>
}
export default Input;