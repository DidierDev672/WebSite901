export interface ContactFireStore{
    namefull?:String
    email?:String;
    phone?:String;
    matter?: String;
    message?: String;
    date_entry?: Date;
};

export interface PQRSFireStore{
    namefull?:String,
    email?:String,
    phone?:String,
    petition?:String,
    description?:String
};


export interface UserFireStore{
    namefull?: String;
    phone?:String;
    email?:String;
    password?:String;
    country?:String;
    city?: String;
    section?:String;
    address?:String;
    uid?:String;
};