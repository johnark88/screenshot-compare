<template>
  <div id="app">
    <div id="nav">
    <nav class="bg-white px-8 pt-2 shadow-md">
        <div class="-mb-px flex justify-center">
          <p class="no-underline uppercase tracking-wide font-bold text-s py-3 mr-8">
            <router-link class="no-underline" to="/">Home</router-link>
          </p>
          <p class="no-underline uppercase tracking-wide font-bold text-s py-3 mr-8">
            <router-link class="no-underline" to="/about">About</router-link>
          </p>
        </div>
      </nav>
    </div>
    <div class="main-container max-w-full">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss"></style>
