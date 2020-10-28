<template>
  <div id="app" class="bg-light">
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
  }
  .blue {
    background: rgb(17, 29, 57);
    color: ghostwhite;
  }
  .btn-blue {
    background: rgb(17, 29, 57);
    color: ghostwhite;
  }
  .btn-blue:hover {
    background: rgb(0,0,0);
    color: ghostwhite;
  }
  .border-blue {
    border: 1px solid rgb(17, 29, 57);
    color: rgb(17, 29, 57);
  }
  .border-blue:hover {
    background: rgb(17, 29, 57);
    color: ghostwhite;
  }
  .text-blue {
    color: rgb(17, 29, 57);
  }
</style>
