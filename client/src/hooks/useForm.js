// write your custom hook here to control your checkout form

import {useLocalStorage} from "./useLocalStorage";

export const useForm = (key, initialValues) => {
    const [values, setValues] = useLocalStorage(key, initialValues);

    const handleChanges = event => {
        // console.log(event.target.name, event.target.value);
        setValues({...values, [event.target.name]: event.target.value});
    };
    return [values, handleChanges];
}
