<script>
  import ImageCarousel from '../components/ImageCarousel.svelte'
  import Modal from '../components/Modal.svelte'
  import Navbar from '../components/Navbar.svelte'
  import AccessForm from './AccessForm.svelte'
  import Login from './Login.svelte'
  import Registration from './Registration.svelte'
</script>

<Navbar />
<Modal>
  <Login slot="login" />
  <Registration />
  <AccessForm slot="accessform" />
</Modal>
<ImageCarousel />
