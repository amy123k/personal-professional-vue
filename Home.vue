<script setup>
import HomeImage from '../assets/images/home.png';
</script>

<template>
<div id="index">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid p-2">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav nav-pills mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <router-link to="/" class="nav-link active bg-light">Home</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/about" class="nav-link text-success">About</router-link>
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
    <div class="home-container bg-info text-white">
        <div class="home-title">
            <h1>Amy Kinney</h1>
            <h2>Aspiring Developer</h2>
        </div>

        <!-- Image -->
        <div class="home-image">
            <img src="../assets/images/home.png" id="hm-img" alt="Amy in front of flower wall"/>
        </div>

        <!-- Brief Background -->
        <div class="home-info">
            <p>
                I, Amy Kinney, am a software developer in training.
                I graduate after the spring 2024 semester and hope to find
                a career in software development shortly after. For more information about my education or about me in general,
                please visit my <router-link to="/about" class="route">About</router-link> page.
            </p>
        </div>

        <!-- Professional Skills -->
        <h2 id="pro-head">Professional Skills</h2>
        <div class="pro-skills">
            <table class="bg-primary">
                <tr>
                    <th><i class="fa-brands fa-html5"></i></th>
                    <th><i class="fa-solid fa-code"></i></th>
                    <th><i class="fa-solid fa-laptop-code"></i></th>
                    <th><i class="fa-brands fa-bootstrap"></i></th>
                </tr>
                <tr>
                    <td>HTML/CSS</td>
                    <td>C#</td>
                    <td>Visual Basic</td>
                    <td>Bootstrap</td>
                </tr>
            </table>
        </div>

        <!-- Personal Skills -->
        <h2 id="per-head">Personal Skills</h2>
        <div class="per-skills">
            <table class="bg-primary">
                <tr>
                    <th><i class="fa-solid fa-magnifying-glass"></i></th>
                    <th><i class="fa-solid fa-book-open-reader"></i></th>
                    <th><i class="fa-solid fa-award"></i></th>
                    <th><i class="fa-solid fa-person-circle-question"></i></th>
                </tr>
                <tr class="p-4">
                    <td>Attention to Detail</td>
                    <td>Strong Work Ethic</td>
                    <td>Reliable</td>
                    <td>Problem-Solving</td>
                </tr>
            </table>
        </div>
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
      $("#hm-img").hide().fadeIn(2000);
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
