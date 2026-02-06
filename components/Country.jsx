import React, { useEffect, useState, useTransition } from 'react'
import { getdata } from './Api'
import Loading from '../src/Loading'
import Card from './Card'
import Search from './Search'

const Country = () => {
    const [data , setData] = useState([])
    const [isPending, startTransition] = useTransition()
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState("All")

    useEffect(() => {
          startTransition(async () => {
            const res = await getdata()
        setData(res.data)
          })
        }, [])

        if (isPending) return <Loading/>;

        console.log(search,filter)

        const handlefilter = (curr)=>{
          if(search){
            return curr.name.common.toLowerCase().includes(search.trim().toLowerCase( ));
          }
            return curr;
        }

        const handleregiondata = (curr)=>{
          if(filter === 'All') return curr;
          return curr.region === filter
        }

       const filterdata =  data.filter((curr)=> handlefilter(curr) && handleregiondata(curr) )
       console.log(filterdata)
        
  return (
    <section className='country-section' >
      <Search filter={filter} setFilter={setFilter} data={data} setData={setData} search={search} setSearch={setSearch} />
        <ul className='grid country-grid' >
            {
        filterdata.map((curr,index)=>{
            // console.log(curr)
           return <Card  curr={curr}  key={index} />
        })
        }
        </ul>
    </section>
  )
}

export default Country