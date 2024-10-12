// context/GlobalContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 定义 Context 类型
interface GlobalContextType {
    globalData: string;
    setGlobalData: (value: string) => void;
}

// 创建 Context，初始值为 undefined
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// 创建一个自定义的 hook，用于方便获取 Context
export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};

// 创建 Provider 组件，负责提供全局状态
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const [globalData, setGlobalData] = useState<string>("初始全局数据");

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};
