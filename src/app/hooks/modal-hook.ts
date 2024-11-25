import { useState, useEffect } from 'react';

interface UseModalState {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useModalState = (): UseModalState => {
    const [isOpen, setIsOpen] = useState(false);
    const localStorageKey = 'isModalOpen';
    console.log("executed " , isOpen);
    
    useEffect(() => {
        const storedValue = localStorage.getItem(localStorageKey);
        if (storedValue !== null) {
            setIsOpen(JSON.parse(storedValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(isOpen));
    }, [isOpen]);

    return { isOpen, setIsOpen };
};

export default useModalState;