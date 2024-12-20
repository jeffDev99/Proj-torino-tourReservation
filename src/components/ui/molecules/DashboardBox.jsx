export default function DashboardBox({title}) {
  return (
    <div className="border border-[#00000033] rounded-[10px] p-3 pb-7 pe-4 mb-6">
      <div className="flex justify-between items-center mb-7">
        <h3>{title}</h3>
        <button className="text-lightGreen flex gap-x-2 items-center mr-16">
          <Edit2 size={16} className="fill-lightGreen" variant="Outline" />
          ویرایش اطلاعات
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
        <div className="flex gap-x-8 items-center ">
          <p>نام و نام خانوادگی</p>
          <p className="text-darkGray">مانیا رحیمی</p>
        </div>
        <div className="flex gap-x-8 items-center ">
          <p>کد ملی</p>
          <p className="text-darkGray">3721156232</p>
        </div>
        <div className="flex gap-x-8 items-center ">
          <p>جنسیت</p>
          <p className="text-darkGray">زن</p>
        </div>
        <div className="flex gap-x-8 items-center ">
          <p>تاریخ تولد</p>
          <p className="text-darkGray">1383/10/17</p>
        </div>
      </div>
    </div>
  );
}
