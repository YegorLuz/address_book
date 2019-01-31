type INameType = {
    isNameValid: string,
};

type IEmailType = {
    isEmailValid: string,
};

type IPhoneType = {
    isPhoneValid: string,
};




export function validateName (name: string) : INameType {
    if (!name || /^[a-zA-Z\s]*$/.test(name)) {
        return {
            isNameValid: '',
        };
    }

    return {
        isNameValid: 'Name should contain only letters of the English alphabet and spaces',
    };
}

export function validateEmail (email: string) : IEmailType {
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

export function validatePhone (phone: string) : IPhoneType {
    if (!phone || /^[0-9]{12}$/.test(phone)) {
        return {
            isPhoneValid: '',
        };
    }

    return {
        isPhoneValid: 'Phone number should contains only 12 digits',
    };
}