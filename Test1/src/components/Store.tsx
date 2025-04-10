import { useState } from "react"

export default function Store({ store }) {
  store.forEach((item) => {
    if (!item.quantity) {
      item.quantity = 1
    }
  })

  const [quantities, setQuantities] = useState(
    store.map((item) => item.quantity)
  )

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities]
    newQuantities[index] = Number(value)
    setQuantities(newQuantities)
  }

  const total = store.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  )

  return (
    <div className="mt-10 p-6 border rounded-xl shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>

      {store.length === 0 ? (
        <p className="text-gray-500">Chưa có sản phẩm nào</p>
      ) : (
        <div className="space-y-4">
          {store.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Đơn giá: {item.price} đ
                </p>
                <input
                  type="number"
                  min="1"
                  value={quantities[index]}
                  onChange={(e) =>
                    handleQuantityChange(index, e.target.value)
                  }
                  className="border rounded px-2 py-1 w-20 mt-1"
                />
              </div>
              <div className="font-bold">
                {item.price * quantities[index]} đ
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-green-600 mt-4">
            Thành tiền: {total} đ
          </div>
        </div>
      )}
    </div>
  )
}
