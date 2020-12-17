# Appointment Scheduler

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

This website contains a form where users can set an appointment schedule with Code for Asia.
> Disclaimer: this website is a take-home assignment for the internship challenge 2020 of Code for Asia.

### Features

* Schedule appointments using a form
    * Calendar used is [XDSoft DateTimePicker](https://github.com/xdan/datetimepicker)
* Admin may set available date and time using the admin dashboard
* Sends an email notification to both user and admin when the form is submitted
    * Currently, the email used to send the email notification is for one of my [sample blog website](https://nib-blog.herokuapp.com/), i.e., nibblog@gmail.com. 
    * I'm using `django.core.mail` and `SMTP` to make this possible 

### Usage

#### As user

* Signup/login to set an appointment schedule
* Edit your account information in your account page
* Change your password in your account page

#### As admin

**Reminders**
````
1. Please do not change the username of the admin
    - The website looks for this username to determine which user is the adminitrator.
2. You may change the email to whichever you like
````

* To access: add `/admin` at the end of the url
* Set the available date and time for appointments
* Monitor the accounts registered

### Web Stack

* HTML5 and CSS3
* Javascript ES6
* JQuery v3.5.1
* Bulma v0.9.1
* Django v3.1.4
* SQLite v3.32.3

### Author

* [Joie Angelo Llantero](https://github.com/joiellantero)

### License

* This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details