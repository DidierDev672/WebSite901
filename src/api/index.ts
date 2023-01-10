import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, setDoc, doc} from "firebase/firestore";
import { updateDoc  } from "firebase/firestore";

import { ContactFireStore, PQRSFireStore, UserFireStore } from "./type";

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
            ...dataContact
        });

        return docRef;
    },

    async savePQRS(dataPQRS: PQRSFireStore){
        const docRef = await addDoc(collection(db, RefDoc.pqrsRef), {
            ...dataPQRS
        });

        return docRef;
    },

    async saveUser(dataUser: UserFireStore){
        const docRef = await addDoc(collection(db, RefDoc.profileRef),{
            ...dataUser
        });

        return docRef;
    },
    async queryProfile(uid: string){
        let DataUser: Object = {};
        const q = query(collection(db, RefDoc.profileRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            DataUser = {
                namefull: doc.data().namefull,
                phone: doc.data().phone,
                country: doc.data().country,
                city: doc.data().city,
                section: doc.data().section,
                address: doc.data().address,
                email: doc.data().email,
                uid: doc.data().uid,
                id: doc.id
            };
        });
        return DataUser;
    },

    async updateUser(id:string, dataUser: UserFireStore){
        const UserRef = doc(db, RefDoc.profileRef, id);

        await updateDoc(UserRef,{
            ...dataUser
        });
    },
};