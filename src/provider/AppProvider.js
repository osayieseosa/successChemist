import { createContext, useEffect, useState } from "react"

export const AppContext = createContext("")

export default function AppProvider({children}){
    const [gender, setGender] = useState(localStorage.getItem('gender') || '')
    const [role, setRole] = useState(localStorage.getItem('role') || '')
    const [name, setName] = useState(localStorage.getItem('name') || '')
    const API_URL = 'http://localhost:3500'
    const [drugs, setDrugs] = useState([]);
    const [dropDownContent, setDropDownContent] = useState('')
    const [menu,setMenu] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const [verifiedAdmin, setVerifiedAdmin] = useState(JSON.parse(localStorage.getItem('verifiedAdmin')) || false);
    const [themeContent, setThemeContent] = useState(false);
    const [currentPage, setCurrentPage ] = useState('')
    
    const fetchDrugs = async () => {
        try {
          const response = await fetch(`${API_URL}/drugs`);
          const drugList = await response.json();
          setDrugs(drugList);
        } catch (err) {
          console.log(err);
        }
      };
    const [form, setForm] = useState({
        name: "",
        price: "",
        comnName: "",
        location: "",
        category: "",
        desc: "",
      });
      useEffect(() => {
        if(!localStorage.getItem('theme')){
          localStorage.setItem('theme', theme)
        }
        setTheme(localStorage.getItem('theme'))
      },[])

      useEffect(() => {
        if(theme === 'dark'){
          document.documentElement.classList.add('dark')
        }else{
          document.documentElement.classList.remove('dark')
        }
      }, [theme])
    
    return (
    <AppContext.Provider value={{gender, setGender, role, setRole, name, setName, drugs, setDrugs, API_URL, dropDownContent, setDropDownContent, menu, setMenu, form, setForm, fetchDrugs, darkMode, setDarkMode, theme, setTheme, verifiedAdmin, setVerifiedAdmin, themeContent, setThemeContent, setCurrentPage, currentPage}}>
        {children}
    </AppContext.Provider>
    )
}
