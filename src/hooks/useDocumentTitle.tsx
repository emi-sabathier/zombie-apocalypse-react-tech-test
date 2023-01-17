import { useEffect } from 'react';
import { dictionary } from '../assets/dictionary';

export function useDocumentTitle(title: string): void {
    useEffect(() => {
        console.log(title);
        if (title.includes('undefined')) {
            console.log('jpp');
            document.title = `${dictionary.error.unknownMember}`;
        } else {
            document.title = title;
        }
    }, [title]);
}
