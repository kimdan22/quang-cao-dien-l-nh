import heroWashingMachineImg from '../assets/images/hero_washing_machine_1789917809892.jpg';
import drumCleaningImg from '../assets/images/drum_cleaning_1789917825787.jpg';
import acMaintenanceImg from '../assets/images/ac_maintenance_1789917840020.jpg';
import waterHeaterRepairImg from '../assets/images/water_heater_repair_1789917854004.jpg';

export const CONTACT_INFO = {
  brandName: 'ĐIỆN LẠNH QUANG CẢNH',
  subBrand: 'Thợ đến sau 30 phút liên hệ',
  area: 'Hà Nội',
  hotline: '096 577 5972',
  hotlineTel: 'tel:0965775972',
  zalo: '032 990 1465',
  zaloUrl: 'https://zalo.me/0329901465',
};

export const IMAGES = {
  heroWashingMachine: heroWashingMachineImg,
  drumCleaning: drumCleaningImg,
  acMaintenance: acMaintenanceImg,
  waterHeaterRepair: waterHeaterRepairImg,
};

export const WASHING_MACHINE_PROBLEMS = [
  {
    icon: '🧼',
    title: 'MÁY GIẶT CÓ MÙI',
    desc: 'Mùi hôi, ẩm mốc khó chịu bốc ra từ khoang giặt và zoăng cao su.',
  },
  {
    icon: '👕',
    title: 'GIẶT QUẦN ÁO KHÔNG SẠCH',
    desc: 'Quần áo giặt xong vẫn bẩn, dính xơ vải và vết ố không được xử lý.',
  },
  {
    icon: '🦠',
    title: 'LỒNG GIẶT BẨN',
    desc: 'Cặn bẩn, mảng bám lâu ngày tích tụ phía sau lồng giặt và đáy mâm giặt.',
  },
  {
    icon: '💧',
    title: 'KHÔNG XẢ NƯỚC',
    desc: 'Nước đọng trong lồng giặt, bơm xả nghẹt hoặc van xả không hoạt động.',
  },
  {
    icon: '🔄',
    title: 'KHÔNG VẮT',
    desc: 'Máy hoàn thành chu trình giặt nhưng không quay vắt hoặc vắt không khô.',
  },
  {
    icon: '🔊',
    title: 'KÊU TO / RUNG MẠNH',
    desc: 'Tiếng va đập lớn, rung lắc mạnh bất thường khi chuyển sang chế độ vắt.',
  },
  {
    icon: '⚠️',
    title: 'BÁO LỖI',
    desc: 'Màn hình nhấp nháy hiển thị mã lỗi (OE, DE, IE, UE, E1, E2...).',
    highlight: 'Gửi mã lỗi qua Zalo để được tư vấn trước.',
  },
  {
    icon: '🔌',
    title: 'KHÔNG VÀO ĐIỆN',
    desc: 'Bấm nút nguồn không sáng đèn, mất nguồn điện hoặc chập chờn bo mạch.',
  },
];

export const WASHING_MACHINE_TYPES = [
  {
    title: 'MÁY GIẶT CỬA TRÊN',
    desc: 'Lồng đứng truyền thống, bảo dưỡng vệ sinh tháo lồng toàn diện.',
  },
  {
    title: 'MÁY GIẶT CỬA NGANG',
    desc: 'Lồng ngang hiện đại, tháo vệ sinh zoăng cửa, chạc ba và lồng inox.',
  },
  {
    title: 'MÁY GIẶT KẾT HỢP SẤY',
    desc: 'Dòng máy đa năng cao cấp, làm sạch hệ thống gió sấy và động cơ inverter.',
  },
];

export const SUPPORTED_BRANDS = [
  'LG',
  'Samsung',
  'Panasonic',
  'Electrolux',
  'Toshiba',
  'Casper',
  'Sharp',
];

export const AC_PROBLEMS = [
  { icon: '❄️', title: 'ĐIỀU HÒA KÉM MÁT', desc: 'Bật nhiệt độ thấp nhưng phòng không mát hoặc chỉ có gió thoảng.' },
  { icon: '💧', title: 'ĐIỀU HÒA CHẢY NƯỚC', desc: 'Nước rỉ hoặc tràn ra từ máng nước dàn lạnh xuống sàn nhà.' },
  { icon: '🌬️', title: 'GIÓ YẾU', desc: 'Quạt lồng sóc bám bụi dày đặc làm lượng gió thổi ra rất ít.' },
  { icon: '👃', title: 'CÓ MÙI', desc: 'Mùi ẩm mốc, mùi chua khó chịu tỏa ra khi bật máy.' },
  { icon: '⚠️', title: 'BÁO LỖI', desc: 'Đèn nhấp nháy, máy tự tắt sau vài phút hoặc hiển thị mã lỗi.' },
  { icon: '🧼', title: 'CẦN VỆ SINH', desc: 'Bụi bẩn tích tụ sau nhiều tháng sử dụng cần bảo dưỡng làm sạch.' },
];

export const WATER_HEATER_ISSUES = [
  { title: 'Không nóng', desc: 'Đèn sáng nhưng nước không nóng hoặc rơ-le ngắt sớm' },
  { title: 'Chảy nước', desc: 'Rò rỉ ở đường ống cấp thoát hoặc gioăng đáy bình' },
  { title: 'Báo lỗi', desc: 'Đèn báo nhấp nháy, chống giật nhảy liên tục' },
  { title: 'Hoạt động bất thường', desc: 'Nước nóng chậm, có tiếng kêu lạ hoặc áp lực nước yếu' },
];

export const WHY_CHOOSE_US = [
  'Hỗ trợ tận nhà tại Hà Nội',
  'Kỹ thuật viên có kinh nghiệm',
  'Kiểm tra và tư vấn rõ ràng',
  'Hỗ trợ nhiều dòng thiết bị điện lạnh',
];

export const FAQS = [
  {
    q: 'Máy giặt có mùi hôi phải làm sao?',
    a: 'Có thể cần vệ sinh lồng giặt và các khu vực bên trong máy. Nếu mùi vẫn còn sau khi vệ sinh, nên kiểm tra thêm nguyên nhân.',
  },
  {
    q: 'Máy giặt giặt quần áo không sạch có nên vệ sinh không?',
    a: 'Vệ sinh có thể giúp xử lý tình trạng cặn bẩn và một số nguyên nhân liên quan đến máy bẩn, tuy nhiên không phải mọi trường hợp đều do máy bẩn. Cần kiểm tra tình trạng thực tế.',
  },
  {
    q: 'Bao lâu nên vệ sinh máy giặt?',
    a: 'Tần suất phụ thuộc vào mức độ sử dụng, nguồn nước và tình trạng máy. Nếu máy có mùi, cặn bẩn hoặc giặt không sạch, nên kiểm tra và cân nhắc vệ sinh.',
  },
  {
    q: 'Máy giặt không vắt phải làm sao?',
    a: 'Không vắt có thể do nhiều nguyên nhân. Nên kiểm tra tình trạng thực tế thay vì tự tháo máy nếu không có chuyên môn.',
  },
  {
    q: 'Có vệ sinh máy giặt cửa ngang không?',
    a: 'Có, hỗ trợ vệ sinh các dòng máy giặt cửa ngang tùy model và cấu tạo.',
  },
  {
    q: 'Có vệ sinh máy giặt cửa trên không?',
    a: 'Có, hỗ trợ vệ sinh máy giặt cửa trên/lồng đứng.',
  },
  {
    q: 'Có sửa máy giặt tại nhà không?',
    a: 'Có. Điện Lạnh Quang Cảnh hỗ trợ kiểm tra và sửa chữa máy giặt tại nhà tại khu vực phục vụ ở Hà Nội.',
  },
  {
    q: 'Có thể gửi ảnh/video lỗi qua Zalo không?',
    a: 'Có. Khách hàng có thể gửi hình ảnh, video hoặc mã lỗi qua Zalo 032 990 1465 để kỹ thuật viên tham khảo tình trạng.',
  },
  {
    q: 'Điều hòa kém mát có thể liên hệ không?',
    a: 'Có. Điện Lạnh Quang Cảnh có hỗ trợ vệ sinh và kiểm tra các tình trạng điều hòa kém mát, chảy nước, có mùi, gió yếu và các lỗi thường gặp.',
  },
];
