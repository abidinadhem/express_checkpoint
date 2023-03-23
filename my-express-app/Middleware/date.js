// Middleware to verify time of request
const verifyTime = (req, res, next) => {
    const date = new Date();
    const dayOfWeek = date.getDay(); //getting days of week
    const hour = date.getHours(); //getting hours of day
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour <= 23) {
      next();
    } else {
      res.send('Sorry, this website is available only during working hours (from Monday to Friday, from 9 to 17).');
    }
  }
  
  module.exports={verifyTime}
  