import React from 'react'
import { useState } from 'react'
import './App.css'
export default function App() {
  const pictures = [
    {
      id: '1',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/7/9/3/29984_2_tru01050_15.jpg'
    },
    {
      id: '2',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/2/8/3/29984_1_tru01050_12.jpg'
    },
    {
      id: '3',
      name: 'foo',
      url: 'https://www.super-hobby.com/zdjecia/3/8/3/29984_1_tru01050_2.jpg'
    },
  ];
 
  const Page = () => {
    const [value, setValue] = useState([]);
    console.log(value); // 输出用户选择图片 id。

    return pictures.map(v => <li key={v.id}>
      <input id={v.id} type="checkbox" onChange={(e) => {
        if (e.target.checked) return setValue((oldvalue) => {
          let newarr = JSON.parse(JSON.stringify(value))
          newarr.push(e.target.id)
          return newarr
        })
        let num = value.indexOf(e.target.id)
        return setValue((oldvalue)=>{
          let newarr = JSON.parse(JSON.stringify(value))
          newarr.splice(num,1)
          return newarr
        })
      }} />
      <img style={{ width: '100px', height: '100px' }} src={v.url} />
    </li>)
  };
  return (
    <div>
      <ul>
        {Page()}
      </ul>
    </div>
  )
}
