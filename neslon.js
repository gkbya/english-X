<script>
function checkAnswer(button, status) {
  // Disable all buttons in this question
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.backgroundColor = (btn === button && status === 'correct') ? 'green' :
                                (btn === button && status === 'wrong') ? 'red' : '';
  });
}
</script>
