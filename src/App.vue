<template>
<div class="vue-tempalte">
    <!-- Navigation -->
    
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
        <div class="container">
            <a class="navbar-brand float-left" href="" target="_blank">
                Manos Verdes
            </a>
            <ul class="nav navbar-nav flex-row float-right">
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/scart">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/about-us">Sobre nosotros</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link pr-3" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary" to="/">Registrarme</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Main -->
    <br><br><br><br><br>
    <div class="App">
       <div class="container">
            <div >
                <router-view />
            </div>
        </div>
    </div>
</div>
</template>
