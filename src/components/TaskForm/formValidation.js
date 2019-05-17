export function validate(values) {
    let errors = {};

    if (!values.title || !values.title.trim()) {
        errors.title = 'Please type a title';
    }

    if (!values.summary || !values.summary.trim()) {
        errors.summary = 'Please type a summary';
    }

    if (!values.email || !values.email.trim()) {
        errors.email = 'Please type an email';
    } else if (!/^\w+[\w-\.]*@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/.test(values.email)) {
        errors.email = 'Your email address is invalid';
    }

    return errors;
}