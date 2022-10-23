<script>
  import { galleryImages } from '../helpers/imagePaths.js'

  let imgs = galleryImages
</script>

<section id="gallery__card" class="gallery__card">
  <h1 class="gallery__title">Gallery</h1>
  <div class="gallery__images">
    <img class="gallery__image" src={imgs[0]} alt="" />
    <img class="gallery__image" src={imgs[1]} alt="" />
    <img class="gallery__image" src={imgs[2]} alt="" />
  </div>
</section>

<style>
  .gallery__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 90%;
    max-width: 1200px;
    padding: 1.5em;
    margin: 2em 0;
    background-color: var(--clr-white);
    box-shadow: 0 0 5px var(--clr-accent);
    border-radius: var(--rounded-box, 1rem);
  }

  .gallery__title {
    font-size: clamp(1rem, 10vw, 2rem);
  }

  .gallery__image {
    width: 100%;
    aspect-ratio: 1/1;
    margin-bottom: 2em;
    border-radius: 1rem;
    object-fit: cover;
    object-position: center;
  }

  .gallery__image:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 50em) {
    .gallery__images {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2em;
    }

    .gallery__image {
      margin-bottom: 0;
    }
  }
</style>
