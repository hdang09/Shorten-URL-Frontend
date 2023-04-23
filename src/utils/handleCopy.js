import { toast } from 'react-toastify';

const handleCopy = (url = '', text = '') => {
    navigator.clipboard.writeText(url);
    toast.success(text ? text : 'Copied to clipboard');
};

export default handleCopy;
