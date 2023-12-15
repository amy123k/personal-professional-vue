<script setup>
</script>

<template>
<div id="portfolio">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid p-2">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav nav-pills mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <router-link to="/" class="nav-link text-success">Home</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/about" class="nav-link text-success">About</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/portfolio" class="nav-link active bg-light">Portfolio</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/contact" class="nav-link text-success">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <!-- Page Navigation -->
    <nav class="navbar bg-light text-success">
        <form class="container-fluid justify-content-center p-2">
            <a class="btn btn-outline-success bg-secondary me-3" href="#C" role="button">C#</a>
            <a class="btn btn-outline-success bg-secondary me-3" href="#VB" role="button">Visual Basic</a>
            <a class="btn btn-outline-success bg-secondary me-3" href="#Web" role="button">Web Development</a>
            <a class="btn btn-outline-success bg-secondary me-3" href="#DB" role="button">Access Database</a>
            <a class="btn btn-outline-success bg-secondary me-3" href="#SQL" role="button">SQL Server</a>
            <a class="btn btn-outline-success bg-secondary me-3" href="#PHP" role="button">PHP</a>
        </form>
    </nav>

    <!-- Content -->
    <div class="port-container bg-info text-white">
        <h1 class="p-5 pb-3">My Projects</h1>

        <!-- Project 1: C# Fat Calculator -->
        <div class="project1 p-5" id="C">
            <h2 class="pb-2">C# Fat Calculator</h2>
            <div class="project1-images">
                <div class="project-image1">
                    <img src="../assets/images/c-fat-calc.png" alt="Fat Calculator Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-fat-calc2.png" alt="Fat Calculator Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-fat-calc-3.png" alt="Fat Calculator Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-fat-calc4.png" alt="Fat Calculator Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 1 Images -->
            <div class="project1-desc p-5">
                <p>
                    This C# project accepts input of the number of calories and 
                    fat grams in a certain food. Then, the number of calories that
                    came from fat is calculated and converted to a percentage. 
                    In addition, the user can select a checkbox to see if the food
                    is considered low fat. There are error messages for incorrect
                    input and a menu strip with clear and exit options.
                </p>
            </div><!-- End Project 1 Description -->
        </div><!-- End Project 1 -->

        <!-- Project 2: C# Hospital Charges -->
        <div class="project2 p-5">
            <h2 class="pb-2">C# Hospital Charges</h2>
            <div class="project2-images">
                <div class="project-image1">
                    <img src="../assets/images/c-hospital.png" alt="Hospital Charges Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-hospital-5.png" alt="Hospital Charges Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-hospital-2.png" alt="Hospital Charges Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-hospital-3.png" alt="Hospital Charges Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-hospital-4.png" alt="Hospital Charges Program">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/c-hospital-6.png" alt="Hospital Charges Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 2 Images -->
            <div class="project2-desc p-5">
                <p>
                    This C# project accepts input of days in the hospital, multiple 
                    hospital charges, date, and time. Then, the calculate button 
                    results in a summary of total charges. The save file button results
                    in a Save As pop-up box in which users can save a charges.txt file.
                    If the charges file exists, new information is appended to the file.
                    A message appears to let the user know the file has been saved.
                    Any invalid data causes an error message.
                </p>
            </div><!-- End Project 2 Description -->
        </div><!-- End Project 2 -->

        <!-- Project 3: C# Name Search -->
        <div class="project3 p-5">
            <h2 class="pb-2">C# Name Search</h2>
            <div class="project3-images">
                <div class="project-image">
                    <img src="../assets/images/c-name.png" alt="Name Search Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/c-name-2.png" alt="Name Search Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/c-name-3.png" alt="Name Search Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/c-name-4.png" alt="Name Search Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 3 Images -->
            <div class="project3-desc p-5">
                <p>
                    This C# project accepts input of a name. The search button causes
                    a message to appear. The message specifies whether or not the name 
                    is in the list of most popular names. The message also specifies
                    whether the name is in the girl's list, boy's list or both.
                </p>
            </div><!-- End Project 3 Description -->
        </div><!-- End Project 3 -->

        <!-- Project 4: Visual Basic Internet Speed -->
        <div class="project4 bg-primary p-5" id="VB">
            <h2 class="pb-2">Visual Basic Internet Speed</h2>
            <div class="project4-images">
                <div class="project-image">
                    <img src="../assets/images/vb-internet.png" alt="Internet Speed Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-internet-1.png" alt="Internet Speed Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-internet-3.png" alt="Internet Speed Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-internet-4.png" alt="Internet Speed Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-internet-5.png" alt="Internet Speed Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-internet-6.png" alt="Internet Speed Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 4 Images -->
            <div class="project4-desc p-5">
                <p>
                    This Visual Basic project accepts the input of 10 internet speeds.
                    The enter internet speed button allows users to enter up to 10
                    speeds, one-by-one. The user can chose to calculate internet speed
                    prior to entering all 10 speeds, but will recieve a message. The user
                    will also recieve a message if no speeds have been entered. Any invalid
                    data will cause an error message.
                </p>
            </div><!-- End Project 4 Description -->
        </div><!-- End Project 4 -->

        <!-- Project 5: Visual Basic Patient Cholesterol -->
        <div class="project5 bg-primary p-5">
            <h2 class="pb-2">Visual Basic Patient Cholesterol</h2>
            <div class="project5-images">
                <div class="project-image">
                    <img src="../assets/images/vb-patientchol.png" alt="Patient Cholesterol Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-patientchol-2.png" alt="Patient Cholesterol Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-patientchol-3.png" alt="Patient Cholesterol Program">
                </div>
                <div class="project-image">
                    <img src="../assets/images/vb-patientchol-4.png" alt="Patient Cholesterol Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 3 Images -->
            <div class="project5-desc p-5">
                <p>
                    This Visual Basic project opens with a loading screen.
                    Then, the display patient information button causes a 
                    seperate window to appear with patient names and cholesterol
                    levels. This window must be closed before a user can proceed
                    in the first window. The first window also includes a display
                    patient information option in the menu strip. 
                </p>
            </div><!-- End Project 5 Description -->
        </div><!-- End Project 5 -->

        <!-- Project 6: Information Technology Website -->
        <div class="project6 p-5" id="Web">
            <h2 class="pb-2">Information Technology Website</h2>
            <div class="project6-images">
                <div class="project-image">
                    <img src="../assets/images/website.png" alt="Information Technology Website">
                </div>
                <div class="project-image">
                    <img src="../assets/images/website2.png" alt="Information Technology Website">
                </div>
                <div class="project-image">
                    <img src="../assets/images/website3.png" alt="Information Technology Website">
                </div>
                <div class="project-image">
                    <img src="../assets/images/website4.png" alt="Information Technology Website">
                </div>
                <div class="project-image">
                    <img src="../assets/images/website5.png" alt="Information Technology Website">
                </div>
                <div class="project-image">
                    <img src="../assets/images/website-mobile.png" alt="Information Technology Website">
                </div><!-- End Project Image -->
            </div><!-- End Project 6 Images -->
            <div class="project6-desc p-5">
                <button class="btn btn-secondary mb-4" type="submit" id="link-button">View Link</button>
                <p id="website-link">URL: <a href="https://insweb.cccneb.edu/amy35468/2023-project/home.html">https://insweb.cccneb.edu/amy35468/2023-project/home.html</a></p>
                <p>
                    I created this <a href="https://insweb.cccneb.edu/amy35468/2023-project/home.html">CCC Information Technology website</a>. This website
                    was later combined with other students' websites to create
                    a group project. However, this is my website prior to merging.
                    This website was developed with Bootstrap and contains dropdowns,
                    cards, a carousel, an imbeded video, page navigation, and a back
                    to top button. In addition, the entire website is responsive.
                </p>
            </div><!-- End Project 6 Description -->
        </div><!-- End Project 6 -->

        <!-- Project 7: Access Database -->
        <div class="project7 bg-primary p-5" id="DB">
            <h2 class="pb-2">Help Desk Access Database</h2>
            <div class="project7-images">
                <div class="project-image1">
                    <img src="../assets/images/db-helpdesk.png" alt="Help Desk Access Database">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/db-helpdesk-2.png" alt="Help Desk Access Database">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/db-helpdesk-3.png" alt="Help Desk Access Database">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/db-helpdesk-4.png" alt="Help Desk Access Database">
                </div><!-- End Project Image -->
            </div><!-- End Project 7 Images -->
            <div class="project7-desc p-5">
                <p>
                    This access database was created for a ficticious help desk.
                    The relationships between tables are established. In addition,
                    I created an Entity-Relationship diagram and table notation.
                </p>
            </div><!-- End Project 7 Description -->
        </div><!-- End Project 7 -->

        <!-- Project 8: SQL Server -->
        <div class="project8 p-5" id="SQL">
            <h2 class="pb-2">SQL Server Query</h2>
            <div class="project8-images">
                <div class="project-image1">
                    <img src="../assets/images/sql-query.png" alt="SQL Server Query Code">
                </div>
                <div class="project-image1">
                    <img src="../assets/images/sql-query-2.png" alt="SQL Server Query">
                </div><!-- End Project Image -->
            </div><!-- End Project 8 Images -->
            <div class="project8-desc p-5">
                <p>
                    This query was designed in SQL Server Management Studio.
                    This is a brief example of what I am currently learning in
                    a SQL Server class.
                </p>
            </div><!-- End Project 8 Description -->
        </div><!-- End Project 8 -->

        <!-- Project 9: PHP -->
        <div class="project9 bg-primary p-5" id="PHP">
            <h2 class="pb-2">PHP FizzBuzz</h2>
            <div class="project9-images">
                <div class="project-image1">
                    <img src="../assets/images/php-fizzbuzz.png" alt="PHP Program">
                </div><!-- End Project Image -->
            </div><!-- End Project 9 Images -->
            <div class="project9-desc p-5">
                <p>
                    This simple PHP file is an example of what I am learning in
                    an Open Source Software class.
                </p>
            </div><!-- End Project 9 Description -->
        </div><!-- End Project 9 -->

        <div class="back-to-top"><h5><a href="#Top">Back to Top</a></h5></div>
    </div><!-- End Portfolio Container -->

    <!-- Footer -->
    <footer class="bg-secondary text-success">
        <h2>Amy Kinney</h2>
        <p>Aspiring Developer</p>
    </footer>
</div>
</template>

<script>
    $(document).ready(function(){
        $("#website-link").hide();
        $("#link-button").click(function(){
            $("#website-link").toggle();
        })
    });
</script>

<style lang="scss">
$primary: rgb(95, 116, 100);
$secondary: rgb(228, 174, 197);
$info: rgb(36, 61, 37);
$success: black;
$light: rgb(250, 217, 230);
$link-color: rgb(250, 217, 230);
@import '../../node_modules/bootstrap/scss/bootstrap';
</style>