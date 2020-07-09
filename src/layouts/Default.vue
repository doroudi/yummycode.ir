<template>
  <div class="layout">
    <div class="row">
      <div class="sidebar">
        <strong>
          <g-link to="/">
            <h1 class="title">Yummy Code!</h1>
          </g-link>
        </strong>
      </div>
      <div class="content">
        <slot />
      </div>
      <!-- <div class="sidebar-left"></div> -->
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none;
}
body {
  font-family: Shabnam, "Segoe UI";
  background: #f0f4f7;
  font-size: 16px;
  margin: 35px;
  direction: rtl;
}

.title {
  font-family: Freestyle Script;
  text-align: center;
  display: block;
  padding: 2.5rem;
  font-size: 2.9rem;
  text-decoration: none;
  direction: ltr;
  margin: 0;
  color: #444;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 60s infinite linear;
}

.row {
  display: flex;
  justify-content: space-between;
}

.sidebar {
  width: 280px;
  height: 100vh;
  background: #eceff1;
}

.sidebar-left {
  width: 280px;
  padding: 1.5rem 0.7rem;
}

img {
  max-width: 100%;
}

nav[role="navigation"] {
  text-align: center;
}
nav[role="navigation"] a {
  display: inline-block;
  margin: 1em 0.75em 2em;
}

.layout {
  margin: 0 auto;
  background: #fff;
  min-height: calc(100vh - 75px);
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.nav__link {
  margin-left: 20px;
}
.post-list {
  list-style: none;
  padding-left: 0;
}
.post-list li {
}

.content {
  padding-top: 2.5rem;
  flex: 1;
}

@-webkit-keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
</style>
