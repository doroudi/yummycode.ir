<template>
  <Layout>
    <div class="mars"></div>
    <img src="../assets/images/404/404.svg" class="logo-404" />
    <img src="../assets/images/404/meteor.svg" class="meteor" />
    <p class="title">😢🔍</p>
    <p
      class="subtitle"
    >آدرسی که دنبالش بودید پیدا نشد <small>(کلی گشتم)</small> ، شاید آدرس رو اشتباهی وارد کردید ، یا حذف شده</p>
    <div align="center">
      <a class="btn-back" href="https://yummycode.ir">بازگشت به صفحه اصلی</a>
    </div>
    <img src="../assets/images/404/astronaut.svg" class="astronaut" />
    <img src="../assets/images/404/spaceship.svg" class="spaceship" />
  </Layout>
</template>

<script>
export default {
    mounted: function() {
        document.querySelector('body').classList.add('not-found')
    },
    destroyed: function() {
        document.querySelector('body').classList.remove('not-found')
    },
    metaInfo: {
        title: '404'
    }

};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');
$nunito-font: 'Nunito', sans-serif;

// mixins
@mixin breakpoint($point) {
    @if $point==mobile {
        @media (max-width: 480px) and (min-width: 320px) {
            @content ;
        }
    }
}

// keyrames
@keyframes floating {
    from { transform: translateY(0px); }
    65%  { transform: translateY(15px); }
    to   { transform: translateY(-0px); }
}



.mars{
  left:0;
  right:0;
  bottom:0;
  position:absolute;
  height: 27vmin;
  background: url('../assets/images/404/mars.svg') no-repeat bottom center;
  background-size: cover;
}

.logo-404{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 16vmin;
  width: 30vmin;

  @include breakpoint(mobile){
    top: 45vmin;
  }
}

.meteor{
  position: absolute;
  right: 2vmin;
  top: 16vmin;
}

.title{
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 5vmin;
  margin-top: 31vmin;

  @include breakpoint(mobile){
    margin-top: 65vmin;
  }
}

.subtitle{
  color: white;
  font-weight: 400;
  text-align: center;
  font-size: 3vmin;
  margin-top: -2.5vmin;
  margin-bottom: 9vmin;
}

.btn-back{
  border: 1px solid white;
  color: white;
  height: 5vmin;
  padding: 12px;
  text-decoration: none;
	border-radius: 5px;

  &:hover{
    background: white;
    color: #4D007D;
  }

  @include breakpoint(mobile){
    font-size: 3.5vmin;
  }
}

.astronaut{
  position: absolute;
  top: 18vmin;
  left: 10vmin;
  height: 30vmin;
	animation: floating 3s infinite ease-in-out;

  @include breakpoint(mobile){
    top: 2vmin;
  }
}

.spaceship{
  position: absolute;
  bottom: 15vmin;
  right: 24vmin;

  @include breakpoint(mobile){
    width: 45vmin;
    bottom: 18vmin;
  }
}
</style>