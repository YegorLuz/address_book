export function validateName (name) {
    if (!name || /^[a-zA-Z\s]*$/.test(name)) {
        return {
            isNameValid: '',
        };
    }

    return {
        isNameValid: 'Name should contain only letters and spaces',
    };
}

export function validateEmail (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line
    if (!email || re.test(String(email).toLowerCase())) {
        return {
            isEmailValid: '',
        };
    }

    return {
        isEmailValid: 'Email is invalid',
    };
}

export function validatePhone (phone) {
    if (!phone || /^[0-9]{12}$/.test(phone)) {
        return {
            isPhoneValid: '',
        };
    }

    return {
        isPhoneValid: 'Phone number should contains only 12 digits',
    };
}