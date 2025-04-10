import { useState } from 'react'
import { milkProducts } from './data'
import SanPham from './SanPham'
import Store from './Store'

export default function SortFilter() {
  const [sort, setSort] = useState('default')
  const [filter, setFilter] = useState('all')
  const [newList, setNewList] = useState(milkProducts)
  const [store, setStore] = useState([])

  const handleFilter = (value: string) => {
    setFilter(value)
    let filterList = []
    if (value === 'all') {
      filterList = milkProducts
    } else {
      filterList = milkProducts.filter((i) => i.loại === value)
    }
    if (sort === "low") {
      filterList.sort((a, b) => a.price - b.price)
    }
    if (sort === "hight") {
      filterList.sort((a, b) => b.price - a.price)
    }
    setNewList(filterList)
  }

  const handleSort = (value: string) => {
    setSort(value)
    let sortList = [...newList]
    if (value === 'hight') {
      sortList.sort((a, b) => b.price - a.price)
    }
    if (value === 'low') {
      sortList.sort((a, b) => a.price - b.price)
    }
    setNewList(sortList)
  }

  const addProduct = (product) => {
    setStore((store) => [...store, product])
  }

  return (
    <>
      <Store store={store} />
      <div className="flex justify-between py-10">
        <label htmlFor="">
          Loại sữa:
          <select
            onChange={(e) => handleFilter(e.target.value)}
            className="border border-solid border-black mx-2 py-1 rounded-xl"
          >
            <option value="all">Tất cả</option>
            <option value="sữa chua">sữa chua</option>
            <option value="sữa tươi">sữa tươi</option>
            <option value="sữa đặc">sữa đặc</option>
            <option value="sữa đậu nành">sữa đậu nành</option>
            <option value="sữa chua uống">sữa chua uống</option>
            <option value="sữa bắp">sữa bắp</option>
            <option value="sữa hạt">sữa hạt</option>
          </select>
        </label>
        <label htmlFor="">
          Sắp xếp:
          <select
            onChange={(e) => handleSort(e.target.value)}
            className="border border-solid border-black mx-2 py-1 rounded-xl"
          >
            <option value="default">Mặc định</option>
            <option value="hight">Theo giá từ cao đến thấp</option>
            <option value="low">Theo giá từ thấp đến cao</option>
          </select>
        </label>
      </div>
      <SanPham newList={newList} addProduct={addProduct} />
    </>
  )
}
