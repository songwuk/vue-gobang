<template>
  <nav w-full text-xl mt-6 inline-flex gap-2 justify-end items-center>
    <button icon-btn @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>
    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/songwuk/vue-gobang"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
