function createAdmin() {
    let adminUsername = document.getElementById('adminUsername').value;
    let adminPassword = document.getElementById('adminPassword').value;
  
    fetch('http://localhost:3000/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: adminUsername, password: adminPassword }),
    })
      .then(response => response.json())
      .then(result => displayResults(result))
      .catch(error => {
        console.error('Error creating admin:', error);
        displayResults({ error: 'Internal Server Error' });
      });
  }
  
  function createGoal() {
    const goalUserId = document.getElementById('goalUserId').value;
    const goalWeight = document.getElementById('goalWeight').value;
  
    fetch('http://localhost:3000/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id: goalUserId, goal_weight: goalWeight }),
    })
      .then(response => response.json())
      .then(result => displayResults(result))
      .catch(error => {
        console.error('Error creating goal:', error);
        displayResults({ error: 'Internal Server Error' });
      });
  }
  
  function logExercise() {
    const exerciseUserId = document.getElementById('exerciseUserId').value;
    const exerciseName = document.getElementById('exerciseName').value;
    const exerciseDuration = document.getElementById('exerciseDuration').value;
    const exerciseDate = document.getElementById('exerciseDate').value;
  
    fetch('http://localhost:3000/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: exerciseUserId,
        exercise_name: exerciseName,
        duration_minutes: exerciseDuration,
        date: exerciseDate,
      }),
    })
      .then(response => response.json())
      .then(result => displayResults(result))
      .catch(error => {
        console.error('Error logging exercise:', error);
        displayResults({ error: 'Internal Server Error' });
      });
  }
  
  function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = JSON.stringify(data, null, 2);
  }