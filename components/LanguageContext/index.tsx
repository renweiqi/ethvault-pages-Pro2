// components/LanguageContext.tsx
import { createContext, useContext, useState, useEffect } from "react";

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState("EN");

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const updateLanguage = (newLang: string) => {
        setLanguage(newLang);
        localStorage.setItem("language", newLang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
