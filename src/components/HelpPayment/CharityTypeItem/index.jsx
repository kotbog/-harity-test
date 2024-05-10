const CharityTypeItem = ({iconPath, text}) => {
    return <div className={'flex flex-row flex-nowrap items-center gap-2'}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1}
             stroke="currentColor"
             className="w-20 h-20 stroke-semi-gray border-2 rounded-2xl p-2 border-semi-gray">
            {iconPath}
        </svg>
        <p className={'text-semi-gray text-lg font-bold max-w-36'}>{text}</p>
    </div>
}

export default CharityTypeItem;