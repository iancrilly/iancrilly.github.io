function nextQuestion(next) {
  document.querySelectorAll('.question').forEach(q => q.classList.add('hidden'));
  document.getElementById(`question${next}`).classList.remove('hidden');
}

function endQuiz(unsure) {
  const resultDiv = document.getElementById('result');
  document.querySelectorAll('.question').forEach(q => q.classList.add('hidden'));
  
  if (!unsure) {
    // User does not meet the requirements (from Question 1)
    resultDiv.innerHTML = `
      <h2>Unfortunately you don't meet the requirements for our flat rate charger program.</h2>
      <p>But don't worry! RCH Renewables can still work with you to create a unique solution to your charging system.</p>
      <p>Just fill out our quote form and make sure to include some photos of your panel and where you want your charger!</p>
      <a href="https://rchrenewables.com/pages/get-a-free-quote" 
        style="color: var(--gsc-button-background-color); text-decoration: underline;">Take me there!</a>
    `;
  } else {
    // User selects "I'm Not Sure" (from Question 2)
    resultDiv.innerHTML = `
      <h2>Don't worry!</h2>
      <p>RCH Renewables can still work with you to create a unique solution to your charging system.</p>
      <p>Just fill out our quote form and make sure to include some photos of your panel and where you want your charger!</p>
      <a href="https://rchrenewables.com/pages/get-a-free-quote" 
        style="color: var(--gsc-button-background-color); text-decoration: underline;">Take me there!</a>
    `;
  }
  resultDiv.classList.remove('hidden');
}

function redirectTo(url) {
  // Create and display a pop-up
  const popup = document.createElement('div');
  popup.id = 'popup';
  popup.innerHTML = `
    <h2>You should qualify!</h2>
    <p>Taking you to our booking page now...</p>
  `;
  document.body.appendChild(popup);

  // Automatically redirect after 2.5 seconds
  setTimeout(() => {
    window.location.href = url;
  }, 2500);
}
