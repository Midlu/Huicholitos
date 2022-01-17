import { useState } from 'react';

const useForm = intitalState => {
    const [values, setValues] = useState(intitalState);
    return [
        values,
        e => { setValues({ ...values, [e.target.name]: e.target.value }) }
    ]
}
export default useForm;