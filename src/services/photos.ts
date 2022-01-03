import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getAll =async () => {
    let list: Photo[] = [];

    const imagesFoler = ref(storage, "images");
    const photoList = await listAll(imagesFoler);

    for(let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }


    return list;
}