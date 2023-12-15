<template>
<div id="contact">
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
                <router-link to="/portfolio" class="nav-link text-success">Portfolio</router-link>
              </li>
              <li class="nav-item px-3">
                <router-link to="/contact" class="nav-link active bg-light">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- Content -->
    <div class="contact-container bg-info text-success p-5">
        <img src="../assets/images/main-img.jpg" class="img-fluid px-5 rounded" alt="Amy's senior picture" id="contact-image">
        <div class="card" id="contact-card">
            <h4 class="card-header p-3">Contact</h4>
            <div class="card-body">
              <h5 class="card-title">I would love to hear from you!</h5>
              <p class="card-text">If you would like to work together on a project or are looking for a new
                software developer for your company, feel free to reach out!</p>
              <a href="mailto:amy35468@cccneb.edu" class="btn btn-secondary p-2">Email: amy35468@cccneb.edu</a>
              <button type="button" class="btn btn-outline-secondary disabled p-2">LinkedIn: Coming Soon</button>
            </div>
            <div class="card-body">
                Coming soon: PHP Contact Form
            </div>
        </div>
    </div> <!-- End Content -->
    
    <!-- Footer -->
    <footer class="bg-secondary text-success">
        <h2>Amy Kinney</h2>
        <p>Aspiring Developer</p>
    </footer>
</div>
</template>


<style lang="scss">
$primary: rgb(95, 116, 100);
$secondary: rgb(228, 174, 197);
$info: rgb(36, 61, 37);
$success: black;
$light: rgb(250, 217, 230);
$link-color: rgb(250, 217, 230);
@import '../../node_modules/bootstrap/scss/bootstrap';
</style>