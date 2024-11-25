import { formatDistanceToNow } from 'date-fns';
import {es} from 'date-fns/locale/es'; // Para mostrar en español

export const calculateTimeDifference = (dateString: string) => {

    const createdAt = new Date(dateString);
    return formatDistanceToNow(createdAt, { locale: es });
  };