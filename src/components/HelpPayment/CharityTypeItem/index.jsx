const CharityTypeItem = ({iconPath, text, active, ...props}) => {
    return <div className={'flex flex-row flex-nowrap items-center gap-2 max-lg:flex-col cursor-pointer'} {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
             stroke="currentColor"
             className={`w-20 h-20 border-2 rounded-2xl p-2 border-semi-gray ${active ? 'stroke-white fill-primary-purple bg-primary-purple' : 'stroke-semi-gray' }`}>
            {iconPath}
        </svg>
        <p className={`text-lg font-bold max-w-36 ${active ? 'text-dark-blue' : 'text-semi-gray'}`}>{text}</p>
    </div>
}

export default CharityTypeItem;