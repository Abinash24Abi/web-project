const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');

const app = express();
const port = 8989;


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST','PUT'],
    credentials: true
}));


mongoose.connect('mongodb://127.0.0.1:27017/web', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    reactCart:{
        type: String,
        default: `{"items":[],"isEmpty":true,"totalItems":0,"totalUniqueItems":0,"cartTotal":0,"metadata":{}}`
    }
});
const User = mongoose.model('User', userSchema);

// Usercontact Schema
const userSchemacontact = new mongoose.Schema({

name:String,
email:String,
phno:Number,
message:String
});
const UserContact = mongoose.model('myfiles', userSchemacontact);



app.post('/send',(req,res) => {
    const {name,email,phno,message} = req.body;
    UserContact.create({name,email,phno,message})
    .then(() => {
       res.json({message:'success'})
    })
    .catch(() => {
       res.json({message:'error'})
    })
})



// JWT Middleware
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.json({ Status: 'unauthorized' });

    jwt.verify(token,'your-secret-key', (err, decoded) => {
        if (err) return res.json({ Status: 'unauthorized' });

        req.user = decoded;
        next();

    });
};



// Signup
app.post('/signup', async (req, res) => {
    console.log(req.body)
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        return res.json({ Status: 'success' });
    } catch (err) {
        console.error(err);
        return res.json({ Status: 'error', Message: 'User already exists or error occurred.' });
    }
});

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.json({ Status: 'failed', Message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ Status: 'failed', Message: 'Incorrect password' });

    const token = jwt.sign({ name: user.name }, 'your-secret-key', { expiresIn: '1d' });

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'Strict'
    });
   
           
    
    return res.json({ Status: 'success',cartinfo: user.reactCart });
});


// Logout
app.get('/logout', (req, res) => {
    res.clearCookie('token', {
        httpOnly: true,
        sameSite: 'Strict'
    });
    return res.json({ Status: 'success' });
});

  

// Protected Route
app.get('/', verifyUser, (req, res) => {
    res.json({ Status: 'success', name: req.user.name });
});



app.put('/updatecart',(req,res) => {
    const {email,cartinfo} = req.body
    User.findOneAndUpdate({email},{ $set: { reactCart: cartinfo } })
    .then(() => res.json({message:'update'}))
    .catch(() => res.json({message:'err'}))
})




app.post('/send-email', async (req, res) => {
    const { email, title, price, quantity, total, image } = req.body;
  
    // Create a transporter (you can use Gmail or any SMTP service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abinashskabi@gmail.com',        // replace with your Gmail
        pass: 'vbll zfue vnea ovcl'            // use an app password, NOT your Gmail password
      }
    });
  
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: email,
      subject: 'Purchase Confirmation',
      html: `
        <h1>Thank you for your purchase!</h1>
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Total:</strong> ${total}</p>
        <img src="${image}" width="300"/>
      `
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Email failed to send' });
    }
  });



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
