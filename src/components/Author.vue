<template>
  <div class="author">
    <g-image
      alt="Author image"
      class="author__image"
      src="~/assets/images/author.jpg"
      width="180"
      height="180"
      blur="5"
    />

    <h1 v-if="showTitle" class="author__site-title">{{ $static.metadata.siteName }}</h1>

    <p class="author__intro">کد خوشمزه!</p>

    <p class="author__links">
      <a href="//twitter.com/doroudi.saeid" class="twitter">
        <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
          <path
            d="
				M 630, 425
				A 195, 195 0 0 1 331, 600
				A 142, 142 0 0 0 428, 570
				A  70,  70 0 0 1 370, 523
				A  70,  70 0 0 0 401, 521
				A  70,  70 0 0 1 344, 455
				A  70,  70 0 0 0 372, 460
				A  70,  70 0 0 1 354, 370
				A 195, 195 0 0 0 495, 442
				A  67,  67 0 0 1 611, 380
				A 117, 117 0 0 0 654, 363
				A  65,  65 0 0 1 623, 401
				A 117, 117 0 0 0 662, 390
				A  65,  65 0 0 1 630, 425
				Z"
            style="fill:#fff;"
          />
        </svg>
      </a>
      <a href="//github.com/doroudi">
        <svg
          class="octicon octicon-mark-github v-align-middle"
          height="32"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ["showTitle"],
};
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;

  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }

  &__intro {
    opacity: 0.8;
  }

  &__site-title {
    font-size: 1.5em;
  }

  &__links {
    margin-top: -0.5em;
	display:flex;
	justify-content: center;
	align-items:center;
    a {
      margin: 0 0.5em;
      display: inline-block;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      line-height: 50px;

      &.twitter {
        background: #868686;
        svg {
          width: 25px;
        }
      }
      svg {
        width: 35px;
      }
    }
  }
}
</style>
