import Input from "../Input";

const HelpForm = () => {
    return <form className={'flex flex-1 flex-row justify-between flex-wrap max-lg:flex-col'}>
        <div className={'flex basis-[40%] flex-col'}>
            <div className={'flex gap-3'}>
                <Input label={"Ім'я"}/>
                <Input label={"Прізвище"} />
            </div>
            <div className={'relative flex flex-col'}>
                <Input label={'Назва компанії, організації'}/>
                <a href="#" className={'absolute px-2 text-blue top-1/2 right-[-80px] max-lg:relative max-lg:left-0 max-lg:text-left'}>+ Логотип</a>
            </div>
            <Input label={'Email-адрес'}/>
            <Input label={'Номер телефону'}/>
        </div>

        <div className={'basis-[40%] flex flex-col'}>
            <Input label={'Країна'}/>
            <div className={'flex gap-3'}>
                <Input label={"Місто"}/>
                <Input label={"Штат, район"}/>
            </div>
            <Input label={'Адреса'}/>
            <div className={'flex w-1/2 justify-start'}>
                <Input label={'Поштовий індекс'}/>
            </div>
        </div>
    </form>
}

export default HelpForm;