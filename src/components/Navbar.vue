<template>

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home"> Proyecto: #1</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarScroll">

          <ul class="navbar-nav me-auto my-2 my-lg-0" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/model">Models</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/designer">Designers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/manufacturer">Manufacturers</router-link>
            </li>
          </ul>
          
          <div class="d-flex">
              <button class="btn text-white" @click="logout();">Logout <i class="fa-solid fa-right-from-bracket"></i></button>
          </div>
        </div>
      </div>
    </nav>

</template>
  
  <script>

    export default {
      methods:{
        logout(){
              Swal.fire({
                title: "Logout no implementado!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              }).then(()=>{
                localStorage.clear();
                this.$router.push('/');
              })
              
            }
        }
    };
  </script>

<style>
  form{
    margin-bottom:  0 !important;
  }
</style>
  