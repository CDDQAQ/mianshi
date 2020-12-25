import React from 'react'

export default function App() {
  const Page = () => {

    const debounce = (fn) => {
      //todo
      let timer = null;
      return function (value) {
        clearInterval(timer)
        var _this = this
        timer = setTimeout(function () {
          fn.call(_this, value)
        }, 2000)
      }
    }
    const search = (value) => {
      console.log(value);
    }
    const debounceSearch = debounce(search);
    return <input type='text' onChange={(e) => debounceSearch(e.target.value)} />
  }
  return (
    <div>
      {Page()}
    </div>
  )
}


