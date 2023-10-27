<template>
  <header
    id="navbar"
    class="flex justify-center border-b xl:fixed xl:top-0 w-screen"
  >
    <div class="h-full flex items-center px-6 w-full xl:px-0 xl:w-1200">
      <router-link to="/">
        <img
          class="h-7 w-13"
          src="/slogin.svg"
        />
      </router-link>
    </div>
  </header>
  <div id="navbar-helper"></div>
</template>

<script setup lang="ts"></script>

<style>
#navbar,
#navbar-helper {
  height: 55px;
  z-index: 9;
  background-color: white;
}
@media (max-width: 1200px) {
  #navbar-helper {
    display: none;
  }
}
</style>
