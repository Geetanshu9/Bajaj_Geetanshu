import express from "express";
const app = express();
app.use(express.json());
const port = 8000;
app.get("/", (req, res) => {
  res.send("Bajaj Api");
});

app.post("/bfhl", (req, res) => {
  const data = req.body.data;
  //   const user_id = geetanshu_kalra_090902003;
  const user_id = "geetanshu_kalra_090902003";
  const email = "geetanshu0516.be21@chitkara.edu.in";
  const roll_number = 2110990516;
  const odd_numbers = data.filter((x) => x % 2 == 1);
  const even_numbers = data.filter((x) => x % 2 == 0);
  const alphabets = data.filter((char) => isNaN(char)).map((char) => char.toUpperCase());
  res.send({
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
  });
});
// {
//     "is_success": true,
//     "user_id": "john_doe_17091999", “email” : “john@xyz.com”,
//     “roll_number”:”ABCD123”,
//     "odd_numbers": [“1”],
//     "even_numbers": [“334”,”4”],
//     "alphabets": [“A”,”R”]
//     }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
