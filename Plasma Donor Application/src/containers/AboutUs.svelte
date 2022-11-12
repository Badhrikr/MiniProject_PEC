<script>
  let ImgURL = './assets/images/plasma_sample.png'
</script>

<section id="about-us-section" class="card">
  <div class="card__description">
    <h1 class="card__title">About Us</h1>
    <div class="card__content">
      We, Safe Life Blood Banks at Chennai, Tamil Nadu, aim to provide prompt,
      economical and reliable services of the safest blood and other blood
      products like plasma, RBCs, platelets, etc. Offering the industry-leading,
      advanced technology and well-equipped inventory, we make all types of
      blood available for the patients and many hospitals. We contribute in
      saving many lives in the time of need or in an emergency.
    </div>
  </div>
  <div class="card__images">
    <img src={ImgURL} alt="" />
  </div>
</section>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    width: 90%;
    max-width: 1200px;
    padding: 1.5em;
    margin: 2em 0;
    background-color: var(--clr-white);
    box-shadow: 0 0 5px var(--clr-accent);
  }

  .card__title {
    font-size: clamp(1rem, 10vw, 2rem);
  }

  .card__images {
    border-radius: var(--rounded-box, 1rem);
    overflow: hidden;
  }

  @media (min-width: 50em) {
    .card {
      flex-direction: row;
    }

    .card__content {
      font-size: clamp(0.8rem, 5vw, 1.2rem);
    }
  }
</style>
