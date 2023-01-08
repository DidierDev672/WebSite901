import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, setDoc, doc} from "firebase/firestore";
import { updateDoc  } from "firebase/firestore";

import { ContactFireStore } from "./type";

enum RefDoc{
    contacRef = "contact",
    profileRef = "profile",
    pqrsRef = "pqrs",
    productRef = "products",
    headerBuyRef = "headerBuy",
    detailBuyRef = "detailBuy"
};


export default {
    async saveContact(dataContact: ContactFireStore){
        const docRef = await addDoc(collection(db, RefDoc.contacRef), {
            dataContact
        });

        return docRef;
    },
};