const reqLogin = require('../middlewares/requireLogin.js');

module.exports = (app, Appointment) => {

  //Create Appointments
  app.post('/api/appointment/new', reqLogin, (req, res) => {
    let appointment = new Appointment();
    appointment.customer = req.body.customer;
    appointment.employee = req.body.employee;
    appointment.employee_id = req.user._id;
    appointment.title = req.body.employee + " <> " + req.body.customer;
    appointment.phone = req.body.phone;
    appointment.desc = req.body.desc;
    let startTimeLength = req.body.startTime.length;
    appointment.start = req.body.start + ' ' + req.body.startTime.substring(0, startTimeLength - 2) + " " + req.body.startTime.substring(startTimeLength - 2, startTimeLength);
    let endTimeLength = req.body.endTime.length;
    appointment.end = req.body.start + ' ' + req.body.endTime.substring(0, endTimeLength - 2) + " " + req.body.endTime.substring(endTimeLength - 2, endTimeLength);
    appointment.business = req.user.business;
    appointment.save(function(err, appointment){
      res.redirect('/dashboard');
    })
  });

  app.get('/api/appointments', reqLogin, (req, res) => {
    Appointment.find({employee_id : req.user._id})
    .then((appointments) => {
      res.send(appointments);
    })
  })

}
