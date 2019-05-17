import * as moment from 'moment';

export function formatDate(date) {
    return moment(date).format(dateFormat);
}

const dateFormat = 'DD.MM.YYYY hh:mm a';