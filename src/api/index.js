import { db } from "./firebase";
import { collection, addDoc, query, where, getDocs, setDoc, doc } from "firebase/firestore";

const contactRef = "contact";
const profileRef = "profile";

export default {
    async saveContact({id,namefull, email, phone, matter, message}){
        const docRef = await addDoc(collection(db, contactRef), {
            id,
            namefull,
            email,
            phone,
            matter,
            message
        });

        return docRef;
    },

    async saveProfile({uid, namefull, phone, country, city, address, email, password}){
        const docRef = await addDoc(collection(db, profileRef), {
            uid,
            namefull,
            phone,
            country,
            city,
            address,
            email,
            password
        });

        return docRef;
    },

    async updateProfile({id, uid, namefull, phone, country, city, address, email, password}){
        // console.log(uid,namefull, phone, country, city, address, email, password);
        const ProfileRef = doc(db, profileRef, id);
        await setDoc(ProfileRef, {
            uid,
            namefull,
            phone,
            country,
            city,
            address,
            email,
            password
        });

    },

    async queryProfile({uid}){
        const enquiry = [];
        const q = query(collection(db, profileRef), where ("uid", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            enquiry.push({
                id: doc.id, uid: doc.data().uid,
                namefull: doc.data().namefull,
                phone: doc.data().phone,
                country: doc.data().country,
                city: doc.data().city,
                address: doc.data().address,
                email: doc.data().email,
                password: doc.data().password
            });
        });
        return { enquiry};
    }
};