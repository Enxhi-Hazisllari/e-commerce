import { useState } from 'react';
import validateInfo from '../components/checkout/validateinfo';

const useValidateCard = () => {
    const [values, setValues] = useState({
        cardNumber: '',
        cardName: '',
        cardExpiration: '',
        cardSecurityCode: '',
        focus: ''
    });

    const [errors, setErrors] = useState({});

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateInfo(values));
    };
    
    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useValidateCard; 