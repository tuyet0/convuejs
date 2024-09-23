const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let hospitals = [
  {
    id: 1,
    name: "Bệnh viện Chợ Rẫy",
    address: "201B Nguyễn Chí Thanh, Quận 5, TP. HCM",
  },
  {
    id: 2,
    name: "Bệnh viện Bạch Mai",
    address: "78 Giải Phóng, Đống Đa, Hà Nội",
  },
  {
    id: 3,
    name: "Bệnh viện Đại học Y Dược",
    address: "215 Hồng Bàng, Quận 5, TP. HCM",
  },
];

// Lấy danh sách bệnh viện
app.get("/api/hospitals", (req, res) => {
  res.json(hospitals);
});

// Thêm bệnh viện mới
app.post("/api/hospitals", (req, res) => {
  const newHospital = req.body;
  newHospital.id = hospitals.length + 1;
  hospitals.push(newHospital);
  res.json(newHospital);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
