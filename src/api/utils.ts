import { ContactFireStore, PQRSFireStore, UserFireStore } from "./type";

const parseNamefull = (namefullFromRequest: any): string => {
    if(!isString(namefullFromRequest)){
        throw new Error("Incorrect or missing name")
    }

    return namefullFromRequest;
};

const parsePhone = (phoneFormRequest: any): string => {
    if(!isString(phoneFormRequest)){
        throw new Error("Incorrect or missing phone");
    }

    return phoneFormRequest;
};

const parseEmail = (emailFromRequest: any): string => {
    if(!isString(emailFromRequest)){
        throw new Error("Incorrect or missing email");
    }

    return emailFromRequest;
};

const parseMatter = (matterFromRequest: any): string => {
    if(!isString(matterFromRequest)){
        throw new Error("Incorrect or missing metter");
    }

    return matterFromRequest;
};

const parseMessage = (messageFromRequest: any): string => {
    if(!isString(messageFromRequest)){
        throw new Error("Incorrect or missing message");
    }

    return messageFromRequest;
};

const parsePetition = (petitionFromReques: any): string => {
    if(!isString(petitionFromReques)){
        throw new Error("Incorrect or missing petition");
    }

    return petitionFromReques;
};

const parseDescription = (descriptionFromRequest: any): string => {
    if(!isString(descriptionFromRequest)){
        throw new Error("Incorrect or missing petition");
    }

    return descriptionFromRequest;
};

const parseCity = (cityFromRequest: any): string => {
    if(!isString(cityFromRequest)){
        throw new Error("Incorrect or missing city");
    }

    return cityFromRequest;
};

const parseCountry = (countryFromRequest: any): string  => {
    if(!isString(countryFromRequest)){
        throw new Error("Incorrect or missing country");
    }

    return countryFromRequest;
};

const parseSection = (sectionFromRequest: any): string => {
    if(!isString(sectionFromRequest)){
        throw new Error("Incorrect or missing section");
    }

    return sectionFromRequest;
};

const parseAddress = (addressFromRequest: any): string => {
    if(!isString(addressFromRequest)){
        throw new Error("Incorrect or missing address");
    }

    return addressFromRequest;
};

const parseUid = (uidFromRequest: any): string => {
    if(!isString(uidFromRequest)){
        throw new Error("Incorrect or missing uid");
    }

    return uidFromRequest;
};

const parsePassword = (passwordFromRequest: any): string => {
    if(!isString(passwordFromRequest)){
        throw new Error("Incorrect or missing password");
    }

    return passwordFromRequest;
};
const isString = (string: string): boolean => {
    return typeof string === "string";
};

export function toNewContactEntry(object: ContactFireStore){
    const newContact = {
        namefull: parseNamefull(object.namefull),
        phone: parsePhone(object.phone),
        email: parseEmail(object.email),
        matter: parseMatter(object.matter),
        message: parseMessage(object.message)
    };

    return newContact;
};

export function toNewPQRSEntry(object:PQRSFireStore){
    const newPQRS = {
        namefull: parseNamefull(object.namefull),
        email: parseEmail(object.email),
        phone: parsePhone(object.phone),
        petition: parsePetition(object.petition),
        description: parseDescription(object.description)
    };

    return newPQRS;
};

export function toNewUserEntry(object:UserFireStore ){
    const newUser = {
        namefull: parseNamefull(object.namefull),
        phone: parsePhone(object.phone),
        email: parseEmail(object.email),
        password: parsePassword(object.password),
        country: parseCountry(object.country),
        city: parseCity(object.city),
        section: parseSection(object.section),
        address: parseAddress(object.address),
        uid: parseUid(object.uid)
    };

    return newUser;
}