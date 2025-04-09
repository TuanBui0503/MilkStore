import conbo from '../assets/conbo.png'
export default function SanPham({ newList, addProduct }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {newList.map((item, index) => (
        <div key={index} className="border p-4 rounded-xl shadow">
          <img src={conbo} alt="" />
          <h3 className="font-bold text-lg">{item.name}</h3>
          <p>Loại: {item.loại}</p>
          <p>Giá: {item.price} đ</p>
          <button
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600"
            onClick={() => addProduct(item)}
          >
            Múc
          </button>
        </div>
      ))}
    </div>
  )
}
