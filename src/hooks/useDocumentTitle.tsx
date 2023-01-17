import { useEffect } from 'react';
import { dictionary } from '../assets/dictionary';

export function useDocumentTitle(title: string): void {
    useEffect(() => {
        if (title.includes('undefined')) {
            document.title = `${dictionary.error.unknownMember}`;
        } else {
            document.title = title;
        }
    }, [title]);
}
