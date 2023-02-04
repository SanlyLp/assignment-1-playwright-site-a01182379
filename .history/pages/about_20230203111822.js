export default function About() {
    return (
      <>
        <Head>
          <title>About Us</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        <form>
  <div>
    <label for="email">Email:</label>
    <input type="text" id="email" required />
  </div>
  <div id="error" style="display: none;">Email is invalid</div>
  <button type="submit" id="submit-btn" style="display: none;">Submit</button>
</form>

<script>
  const emailInput = document.querySelector('#email');
  const errorDiv = document.querySelector('#error');
  const submitBtn = document.querySelector('#submit-btn');

  emailInput.addEventListener('input', (event) => {
    const email = event.target.value;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (emailRegex.test(email)) {
      errorDiv.style.display = 'none';
      submitBtn.style.display = 'block';
    } else {
      errorDiv.style.display = 'block';
      submitBtn.style.display = 'none';
    }
  }
</script>

        </main>

      </>
    )
  }
  