import React from 'react'

const Search = ({search,setSearch,filter,setFilter,data,setData}) => {

    const handleclick = (value)=>{
          const sortcountries =  [...data].sort((a,b)=>{
          return (value === 'Asc'
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common)
          )})
          setData(sortcountries)
    }

  return (
    <section className='section-searchFilter container' >
        <div  >
            < input type="text" style={{padding:'1rem',borderRadius:'2rem',border:'1px solid white'}} placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>

        <div>
            <select className='select-section' style={{paddingLeft:'8px'}} value={filter} onChange={(e)=>setFilter(e.target.value)} >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Search