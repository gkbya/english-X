<script>
  document.querySelectorAll('.question').forEach(question => {
    const correctOption = question.dataset.correct;

    question.querySelectorAll('li').forEach(option => {
      option.addEventListener('click', () => {
        // Prevent selecting again
        if (question.classList.contains('answered')) return;
        question.classList.add('answered');

        const selected = option.dataset.option;

        if (selected === correctOption) {
          option.style.backgroundColor = '#4CAF50'; // green
          option.style.color = 'white';
        } else {
          option.style.backgroundColor = '#f44336'; // red
          option.style.color = 'white';
          // Show the correct one
          question.querySelector(`li[data-option="${correctOption}"]`).style.backgroundColor = '#4CAF50';
          question.querySelector(`li[data-option="${correctOption}"]`).style.color = 'white';
        }
      });
    });
  });
</script>
