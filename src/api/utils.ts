import { ContactFireStore } from "./type";

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

const isString = (string: string): boolean => {
    return typeof string === "string";
};

function toNewContactEntry(object: ContactFireStore){
    const newContact = {
        namefull: parseNamefull(object.namefull),
        phone: parsePhone(object.phone),
        email: parseEmail(object.email),
        matter: parseEmail(object.matter),
        message: parseMessage(object.message)
    };

    return newContact;
}

export default toNewContactEntry;