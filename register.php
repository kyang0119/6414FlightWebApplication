<!--Kuan Yang kxy200010 6414-->
<html>

<head>
    <title>
        Register
    </title>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>

<body>

    <div class="header">
        <h1>Registration</h1>
        <p><em>register your account with ease</em></p>
    </div>
    <div class="row">
        <div class="topnav">
            <!-- <div class="nav navbar-nav"> -->
            <a href="flights.html">Flights</a>
            <a href="hotels.html">Hotels</a>
            <a href="rentalcarsbook.html">Rental Cars Book</a>
            <a href="orderstatus.html">Order Status</a>
            <a href="contact.html">Contact</a>
            <a href="specialoffer.html"> Special Offer</a>
            <a href="register.php"> Register</a>
        </div>
    </div>

    <p id="contact time" onmouseover="showTime5()"> Put mouse here to see the current time! </p>


    <div class="row">

        <div class="column side">
            <h2>Customer Service</h2>

            <a href="">
                <h3>Email us</h3>
            </a>
            <a href="">
                <h3>Call us</h3>
            </a>
            <a href="">
                <h3>Visit us</h3>
            </a>
            <div>
                <a href="#" class="myCart" onclick="displayMyCart()"><b>My Cart</b></a>
                <p class="myCartP1"></p>
                <p class="myCartP2"></p>
                <p class="myCartP3"></p>
                <p class="myCartP4"></p>
                <p class="myCartP5"></p>
            </div>

        </div>



        <div class="column middle">
            <div class="container">
                <h3>Register:</h3>
                <form id="contact form" form action="insert.php" method="post">
                    <div class="form-group">
                        <lable for="passengerID">Passenger ID (Phone Number)</lable>
                        <input type="text" id="passengerID" value="(469)523-6890" name="passengerID" class="form-control" required> <br>
                        <lable for="registerfname">First Name</lable>
                        <input type="text" id="registerfname" value="John" name="registerfname" class="form-control" required> <br>
                        <lable for="registerlname">Last Name</lable>
                        <input type="text" id="registerlname" value="Smith" name="registerlname" class="form-control" required> <br>
                        <!-- <lable for="phone">Phone Number</lable>
                <input type="tel" id="phone" value="469-556-1256" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                <br>
                <lable for="gender"> Gender:</lable>
                <input type="radio" id="male" name="gender" checked="checked" required>
                <lable for="male"> Male</lable>
                <input type="radio" id="female" name="gender">
                <lable for="female"> Female</lable> <br> -->
                        <lable for="registerAge">Age</lable>
                        <input type=number id="registerAge" value=18 name="registerAge" class="form-control" required> <br>

                        <lable for="registerEmail">Email:</lable>
                        <input type="text" pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" id="registerEmail" value="JohnSmith@gmail.com" class="form-control" required> <br>
                        <!-- <textarea rows="3" cols="50" name="comment" form="contact form" minlength="10"
                    id="comment">Comments</textarea> -->
                        <lable for="password">Password</lable>
                        <input type="password" id="password" name="password" minlength="8" class="form-control" required> <br>
                        <lable for="confirmPassword">Confirm Password</lable>
                        <input type="password" id="confirmPassword" ame="confirmPassword" minlength="8" class="form-control" required> <br>
                        <a href="#" onclick="registerInfoConvertToJSON()"> Validate and Create JSON Object</a><br>
                        <!-- <input type="submit" value="Submit"> -->
                        <button type="submit" class="btn btn-default"> Submit </button><br>
                        <p>Already have an account? <a href="login.php">login now</a></p>
                        <p id="registerOutput"></p>
                    </div>
                </form>
            </div>
        </div>


    </div>






    <div class="footer" id="contactFooter">
        <p id="hahaha">Name: Kuan Yang ID:Kxy200010</p>
    </div>
    <script type="text/javascript" src="web.js">


    </script>
    </script>
    <script type="text/javascript" src="myJquery.js"></script>
    </script>
    <script>
        document.addEventListener("DOMContentLoaded", (event) => {
            document.body.style.backgroundColor = window.localStorage.getItem('bgColor');

        });
    </script>


</body>

</html>