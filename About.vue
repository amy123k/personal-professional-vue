<script setup>
import about1 from '../assets/images/about1.jpg';
import about2 from '../assets/images/about2.jpg';
</script>

<template>
<div id="about">
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
                <router-link to="/about" class="nav-link active bg-light">About</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/portfolio" class="nav-link text-success">Portfolio</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/contact" class="nav-link text-success">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    <!-- Content -->
    <div class="about-container bg-info text-success p-5">
        <div id="about-title">
            <h1 class="text-white p-3 mb-5">About Me</h1>
        </div>
            
        <!-- Image -->
        <div id="about-img1" class="p-5 pt-0">
            <img src="../assets/images/about1.jpg" alt="Amy smiling">
        </div>

        <!-- Background Information -->
        <div id="about-background">
            <div class="card bg-light">
                <h5 class="card-header p-3">Why Developing?</h5>
                <div class="card-body">
                    <p class="card-text p-2">
                        My name is Amy Kinney, and I am an aspiring developer. I enjoy the challenge of developing.
                        To me, developing is like a puzzle; every aspect of a program or website needs to fit perfectly together.
                    </p>
                </div>
            </div>
            <br>

            <div class="card bg-light">
                <h5 class="card-header p-3">What do you do outside of Developing?</h5>
                <div class="card-body">
                    <p class="card-text p-2">
                        I am a full-time employee and a full-time student. I put a lot of heart into everything that I do, which is time-consuming. 
                        Therefore, my free time is minimal. However, I enjoy watching a good show, shopping, and, occasionally, playing video games.
                        I also enjoy traveling and trying new things.
                    </p>
                </div>
            </div>
        </div>
        <br>

        <!-- Education and Skills -->
        <div id="about-education">
            <div class="card bg-light">
                <h5 class="card-header p-3">Education</h5>
                <div class="card-body">
                    <p class="card-text p-2">
                        I graduated high school as a straight-A student with a variety of college credit courses and honors courses.
                        Currently, I attend community college and am working toward my Associates Degree in Information Technology, specializing in
                        software development. I am currently on my third of four semesters.
                    </p>
                </div>
            </div>
            <br>

            <div class="card bg-light">
                <h5 class="card-header p-3">Skills</h5>
                <div class="card-body">
                    <p class="card-text p-2">
                        So far, I have learned C#, Visual Basic, and HTML/CSS. Currently, I am learning JavaScript, Java, PHP, and SQL.
                        I am proficient in Microsoft Word, Excel, PowerPoint, and Access. Additionally, I have learned how to design Access databases.
                        Some of my work can be found on the 
                        <router-link to="/portfolio" class="route text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom"
                        data-bs-custom-class="portfolio-tooltip"
                        data-bs-title="Click for descriptions and images of past projects.">Portfolio</router-link> page of this website.
                    </p>
                </div>
            </div>
        </div>
        
        <!-- Image -->
        <div id="about-img2" class="p-5 pt-0">
            <img src="../assets/images/about2.jpg" alt="Amy with graduation hat">
        </div>
    </div>

        <div id="education-progress" class="p-5 center">
            <h2 class="py-3">Education Progress</h2>
            <table class="table table-sm" id="tbl">
                <tr>
                    <th scope="col">Semester</th>
                    <th scope="col">Class Count</th>
                    <th scope="col">Topics Covered</th>
                </tr>
                <tr v-for="item in semesters">
                    <th scope="row">{{item.number}}</th>
                    <td>{{item.classCount}}</td>
                    <td>{{item.topics}}</td>
                </tr>
            </table>
        </div>

    <!-- Footer -->
    <footer class="bg-secondary text-success">
        <h2>Amy Kinney</h2>
        <p>Aspiring Developer</p>
    </footer>
</div>
</template>

<script>
    $(document).ready(function(){
        $('[data-bs-toggle="tooltip"]').tooltip();
    });

    $(document).ready(function(){
        $(".card-body").hide();
        $(".card-body").slideDown("slow");
    });

    export default {
        name: 'HelloWorld',
        data () {
            return {
                semesters: [
                    {
                        "number": "1",
                        "classCount": "4",
                        "topics": "IT hardware introduction, IT support, IT software introduction, and Microsoft applications"
                    },
                    {
                        "number": "2",
                        "classCount": "5",
                        "topics": "business communication, C# programming, database design, Visual Basic programming, and web development"
                    },
                    {
                        "number": "3",
                        "classCount": "4",
                        "topics": "dynamic web applications, JAVA programming, PHP and MySQL, and SQL Server"
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">
$primary: rgb(95, 116, 100);
$secondary: rgb(228, 174, 197);
$info: rgb(36, 61, 37);
$success: black;
$light: rgb(250, 217, 230);
$link-color: rgb(250, 217, 230);
@import '../../node_modules/bootstrap/scss/bootstrap';
.center {
  margin-left: 15%;
  margin-right: auto;
}
</style>