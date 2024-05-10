import CharityTypeItem from "./CharityTypeItem";
import PayPalLogo from "./../../assets/icons/Paypal Symbol Logo Vector.svg";
import Privat24Logo from "./../../assets/icons/privat24.svg";
import WebmoneyLogo from "./../../assets/icons/Webmoney Logo Vector.svg";
import VisaMastercardLogo from "./../../assets/icons/visa-and-mastercard-logo.png";
import AtmLogo from "./../../assets/icons/atm.svg";
import {useRef, useState} from "react";
import Input from "../Input";
const HelpPayment = () => {
    const paymentTypes = [
        {
            name: 'PayPal',
            logo: PayPalLogo
        },
        {
            name: 'Приват24',
            logo: Privat24Logo
        },
        {
            name: 'Карта Visa/MasterCard',
            logo: VisaMastercardLogo
        },
        {
            name: 'WebMoney',
            logo: WebmoneyLogo
        },
        {
            name: 'Термінали України',
            logo: AtmLogo
        }
    ]
    const charityTypes = [
        {
            type: 'Зробити',
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"/>
        },
        {
            type: 'Фінансова допомога',
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>

        },
        {
            type: 'Матеріальна допомога',
            icon: <path
                d="M17 11C17 9.89543 17.8954 9 19 9H21V4H16.8569C16.4834 5.6291 15.4009 7.03561 13.8672 7.80248L12.8944 8.28885C12.3314 8.57038 11.6686 8.57038 11.1056 8.28885L10.1328 7.80248C8.59908 7.03561 7.51661 5.6291 7.14314 4H3V9H5C6.10457 9 7 9.89543 7 11V20H17V11ZM12 6.5L11.0272 6.01362C9.78482 5.39241 9 4.12255 9 2.73347C9 2.32838 8.67162 2 8.26653 2H3C1.89543 2 1 2.89543 1 4V10C1 10.5523 1.44772 11 2 11H5V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V11H22C22.5523 11 23 10.5523 23 10V4C23 2.89543 22.1046 2 21 2H15.7335C15.3284 2 15 2.32838 15 2.73347C15 4.12255 14.2152 5.39241 12.9728 6.01362L12 6.5Z"/>
        },
        {
            type: 'Волонтерство',
            icon: <path strokeLinecap="round" strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
        }
    ]

    const [activePayment, setActivePayment] = useState();
    const [activeCharityType, setActiveCharityType] = useState('')

    const [cardNumber, setCardNumber] = useState(['', '', '', '']);

    const inputRefs = useRef([]);

    const handleChangeCardNumber = (event, index) => {
        const re = /^[0-9\b]+$/; // number expression
        const value = event.target.value;
        if (!re.test(value)) return;// if not number return
        const newInputs = [...cardNumber];
        newInputs[index] = value;
        setCardNumber(newInputs);
        if (event.target.value.length === 4) {
            if (event.target.value.length === 4 && index < 3) {
                inputRefs.current[index + 1].focus(); // focus next input
            }
        }
    };

    return <div className={'flex-1 flex flex-col'}>
        <div className={'flex flex-row justify-around my-5'}>
            {
                charityTypes.map((item, index) =>
                    <CharityTypeItem
                        onClick={() => setActiveCharityType(item.type)}
                        key={index}
                        active={item.type === activeCharityType}
                        text={item.type}
                        iconPath={item.icon}/>
                )
            }
        </div>
        <div className={'flex-1 flex justify-between border-2 rounded-lg gap-5 border-semi-gray flex-wrap max-xl:justify-center'}>
            <div className={'p-4 basis-1/2 max-xl:basis-[100%]'}>
                <p className={'text-gray text-sm font-semibold text-left py-2'}>Спосіб оплати</p>
                <div className={'flex flex-row flex-wrap gap-3 max-lg:justify-center'}>
                    {
                        paymentTypes.map((item, index) => {
                            return <div
                                key={index}
                                onClick={() => setActivePayment(item.name)}
                                className={`transition-all flex items-center justify-end ease duration-200 cursor-pointer rounded-2xl px-8 py-2 hover:scale-105 flex-col basis-1/4 min-w-[220px] grow-0 ${activePayment !== item.name ? 'bg-semi-gray' : 'bg-primary-purple'}`}>
                                <img src={item.logo} alt={item.name} className={'w-20 h-28 object-contain'}/>
                                <p className={'font-light text-white text-sm self-center'}>{item.name}</p>
                            </div>
                        })
                    }

                </div>
            </div>
            <div className={'bg-semi-gray rounded-2xl basis-1/3 p-4 m-7 pb-10 max-h-[300px]'}>
                <p className={'text-white text-lg text-left pl-2 pt-2'}>Номер карти</p>
                <div className={'flex flex-row gap-2'}>
                    {
                        cardNumber.map((item, index) =>
                            <Input
                                key={index}
                                value={cardNumber[index]}
                                type="text"
                                ref={(ref) => inputRefs.current.push(ref)}
                                maxLength={4}
                                onChange={e => handleChangeCardNumber(e, index)}
                                inputStyles={'text-center min-w-24'}
                            />
                        )
                    }
                </div>
                <div className={'flex flex-1'}>
                    <Input
                        label={'Термін дії'}
                        labelStyles={'text-white font-light text-lg'}
                        inputStyles={'max-w-32 text-center'}
                        maxLength={5}
                    />
                    <Input
                        label={'CVC/CVV'}
                        labelStyles={'text-white font-light text-lg'}
                        inputStyles={'max-w-32 text-center'}
                        maxLength={3}
                        type={'password'}
                    />
                </div>
            </div>
        </div>
    </div>
}

export default HelpPayment;