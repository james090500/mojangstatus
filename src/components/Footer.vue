<template>
    <nav class="navbar navbar-fixed-bottom footer">
      <!-- Navbar content with the dropup menu -->
      <div class="navbar-content">
        <div class="dropdown dropup with-arrow">
          <button class="btn" data-toggle="dropdown" type="button" id="navbar-fixed-bottom-dropdown-toggle">
            Help
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu" aria-labelledby="navbar-fixed-bottom-dropdown-toggle">
            <a href="#" class="dropdown-item">Tutorials</a>
            <a href="#" class="dropdown-item">Examples</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Support</a>
            <a href="#" class="dropdown-item">Contact us</a>
          </div>
        </div>
      </div>
      <!-- Navbar brand -->
      <a href="#" class="navbar-brand ml-auto"> <!-- ml-auto = margin-left: auto -->
      </a>
      <!-- Navbar text -->
      <span class="navbar-text ml-auto"> <!-- ml-auto = margin-left: auto -->
        &copy; James Harrison
      </span>
    </nav>
</template>

<style>
  .footer {
    position: fixed !important;
    bottom: 0;
  }
</style>