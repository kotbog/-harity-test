import HelpForm from "../components/HelpForm";
import SwitchForm from "../components/SwitchForm";
import HelpPayment from "../components/HelpPayment";

const Charity = () => {
    return <div className={'container m-auto relative'}>
        <h1 className={'text-5xl font-extrabold text-dark-blue py-2'}>Заповніть форму</h1>
        <div className={'flex justify-center my-4'}>
            <SwitchForm/>
        </div>
        <HelpForm/>
        <h1 className={'text-5xl font-extrabold text-dark-blue py-2'}>Види допомоги</h1>
        <h3 className={'text-xl font-light text-dark-blue py-2'}>Ви можете змінити вид допомоги</h3>
        <HelpPayment/>
    </div>
}

export default Charity;