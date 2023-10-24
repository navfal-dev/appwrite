const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmail = (email) => {
    return regex_email.test(email);
};

export { isEmail, regex_email };
