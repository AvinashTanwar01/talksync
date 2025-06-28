import {create } from 'zustand';

 export const useThemeStore= create((set)=>({
    theme:localStorage.getItem("talksync-theme") ||"coffee",
    setTheme:(theme)=>{
        localStorage.setItem("talksync-theme", theme);
        set({ theme });
    },
}))