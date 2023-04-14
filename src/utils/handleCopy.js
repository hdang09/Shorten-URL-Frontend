import { toast } from 'react-toastify';

const handleCopy = (url) => {
    navigator.clipboard.writeText(url);
    toast.success(`Copied to clipboard`);
};

export default handleCopy;
