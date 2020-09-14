import {useState, useEffect} from 'react';
import { projectFirestore } from '../firebase/config';

//Take a snapshot of each image added to db, send notif to this callback function
//create array of image docs to return
const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    //cycle through docs in image data collection, save in argument in callback for each doc
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents);
            })
        
        return () => unsub();

    }, [collection])

    return {docs};
}

export default useFirestore;