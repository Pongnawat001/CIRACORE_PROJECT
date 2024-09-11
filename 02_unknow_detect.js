var objs = payload.FaceRec.face_array;
var datetime = payload.datetimetFaceRec;
var num = '';
var hasUnknown = false;

for (var i = 0; i < objs.length; i++) {
	num += objs[i].name;
	if (objs[i].name === "UNKNOWN") {
		hasUnknown = true;
	}
}

if (hasUnknown) {
	payload.ResultFaceRec = "Check-in / Check-out: ระบบไม่พบใบหน้าในฐานข้อมูล";
} else if (datetime !== undefined) {
	payload.ResultFaceRec = "Check-in / Check-out: ระบบทำการบันทึกคุณ " + num + " เข้าสู่ระบบเรียบร้อย เมื่อ " + datetime + ".";
} else if (num === '') {
	payload.ResultFaceRec = "Check-in / Check-out: ไม่พบใบหน้า กรุณาลองใหม่อีกครั้ง.";
} else {
	var currentDate = new Date();
	var formattedDate = currentDate.toLocaleString();
	payload.ResultFaceRec = "Check-in / Check-out: ระบบทำการบันทึกคุณ " + num + " เข้าสู่ระบบเรียบร้อย เมื่อ " + formattedDate + ".";
}