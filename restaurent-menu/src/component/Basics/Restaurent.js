import React, { useState } from 'react'
import "./Style.css"
import Menu from './menuApi.js'
import MenuCard from './menuCard.js'
import Navbar from './Navbar.js'

const uniqueList = [
  ...new Set(Menu.map((curElem) => {
  return curElem.category;
})),
"All",
];
console.log(uniqueList);

const Restaurent = () => {

  const [menuData, setmenuData] = useState(Menu);
  console.log(menuData);
  const [menuList, setmenuList] = useState(uniqueList);
  console.log(menuData);

  const filterItem = (category) => {
    if(category==="All"){
      setmenuData(Menu);
      return;
    }
     const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
     });
     setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurent
