export default function Store({ store }) {
  const total = store.reduce((sum, item) => sum + Number(item.price), 0)

  return (
    <div className="shadow-lg pt-5 p-6 bg-white rounded-2xl w-full mx-auto border-t mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Giỏ hàng </h2>

      <div className="space-y-6">
        {store.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                Đơn giá: {item.price} đ
              </p>
            </div>
            <div className="text-right font-bold text-base">{item.price} đ</div>
          </div>
        ))}
        <div className="pt-6 text-right text-xl font-bold text-green-600">
          Thành tiền: {total} đ
        </div>
      </div>
    </div>
  )
}
