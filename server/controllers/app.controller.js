const connection = require("../db.config");
const bcrypt = require("bcrypt");
const saltrounds = 12;
const secretKey = "MessagingApp";
const jwt = require("jsonwebtoken");

exports.findAll = (req, res) => {
  connection.query("Select * from user_table", (error, results) => {
    if (results) {
      res.json(results);
    } else {
      console.log("error" + error);
    }
  });
};

exports.register = (req, res) => {
  let data = req.body;
  console.log("data from controller => " + data);
  bcrypt
    .hash(data.password, saltrounds)
    .then((result) => {
      data.password = result;
      connection.query(
        "INSERT INTO user_table SET ?",
        data,
        (error, results) => {
          if (results) {
            console.log("User Registeration Successful" + results);
            res.status(200).json(results.insertId);
          } else {
            if (error.message.includes("Duplicate entry")) {
              res.status(409).json({ error: "Email Already Exist" });
            } else {
              res.status(500).json({ error: "Internal Server Error" });
            }
            console.log(
              " Error in server: " + error.message + " results " + results
            );
          }
        }
      );
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("data from controller => " + JSON.stringify(data));
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const sql = `SELECT name, email, password FROM user_table WHERE email = ?`;

  connection.query(sql, [email], (error, results) => {
    if (error) {
      console.error("Database error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = results[0];

    bcrypt
      .compare(password, user.password)
      .then((passwordMatch) => {
        if (passwordMatch) {
          const token = jwt.sign({ emailId: user.email }, secretKey, {
            expiresIn: "1h",
          });
          delete user.password;
          res.status(200).json({ User: user, token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.error("Error comparing password:", err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  });
};

exports.checkUser = (req, res) => {
  const email = req.params;
  console.log(email)
  const sql = `Select count(*) as count from user_table where  ?`;
  console.log(connection.query(sql, email, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      console.log(JSON.stringify(result));
      res.status(200).json(result[0].count);
    }
  }));
};

exports.addContact = (req, res) => {
  const email = req.body;
  console.log(email)
  const sql = `Select count(*) as count from user_table where  ?`;
  connection.query(sql, email, (error, result) => {
    if (error) {
      // console.log(error);
      res.status(500).json(error);
    } else {
      // console.log(JSON.stringify(result));
      res.status(200).json(result[0].count);
    }
  });
};