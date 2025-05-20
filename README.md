<!DOCTYPE html>
<html>
<head>
  <title>Timed Google Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    iframe {
      width: 100%;
      height: 90vh;
      border: none;
    }
    #timer {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>

  <div id="timer">40:00</div>

  <!-- Replace the src URL below with your actual Google Form link -->
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe1driKhYO4rYRovG5CkXRHFoGKJg5odTGyXWK9_Qk7VqId2g/viewform?usp=dialog"></iframe>

  <script>
    let time = 40 * 60; // 40 minutes in seconds
    const timerDisplay = document.getElementById('timer');

    const countdown = setInterval(() => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      time--;

      if (time < 0) {
        clearInterval(countdown);
        alert("Time is up! The form will now close.");
        window.location.href = "https://www.google.com"; // Redirect or close
      }
    }, 1000);
  </script>

</body>
</html>
