import { useSelector } from 'react-redux';

export const contacts = useSelector(state => state.contacts);
export const filter = useSelector(state => state.filter);
