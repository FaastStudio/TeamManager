<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="https://kilianstallinger.com">
            Kilian Stallinger
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://faastblog.com">
            Blog
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://kilianstallinger.com" target="_blank">Kilian Stallinger.</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style>
</style>
