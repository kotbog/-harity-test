import Input from "../Input";

const HelpForm = () => {
    return <form className={'flex flex-1 flex-row justify-between flex-wrap'}>
        <div className={'flex basis-[40%] flex-col'}>
            <div className={'flex gap-3'}>
                <Input label={"Ім'я"}/>
                <Input label={"Прізвище"} />
            </div>
            <Input label={'Назва компанії, організації'}/>
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