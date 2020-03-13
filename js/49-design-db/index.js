/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */

var library = {
	books: book,
	users: user,
	history: history
};

var book = [
	{
		id: 0,
		name: "JS",
		quantity: 5
	},
	{
		id: 1,
		name: "python",
		quantity: 6
	},
	{
		id: 2,
		name: "php",
		quantity: 3
	}
];

var user = [
	{
		id: "D00",
		name: "Ductn",
		books: book.id,
		borowDay: "13/3/2020",
		returnDay: "16/4/2020"
	},
	{
		id: "D01",
		name: "Duck",
		books: book.id,
		borowDay: "13/3/2020",
		returnDay: "15/4/2020"
	}
];

var history = {
	id: user.id,
	borowed: user.borowDay,
	returned: user.returnDay
};