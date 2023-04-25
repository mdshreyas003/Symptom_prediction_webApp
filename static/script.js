const muscleGroups = {
  chest: [
    {
      exercise: 'Bench Press',
      gif: 'https://media.tenor.com/0hoNLcggDG0AAAAC/bench-press.gif',
    },
    {
      exercise: 'Push-Ups',
      gif: 'https://media.tenor.com/gI-8qCUEko8AAAAC/pushup.gif',
    },
    {
      exercise: 'Dumbbell Flyes',
      gif: 'https://media.tenor.com/TuMDTcCr3eMAAAAd/chestpress-flies.gif',
    },
  ],
  back: [
    {
      exercise: 'Deadlifts',
      gif: 'https://media.tenor.com/TXC6tjVjIywAAAAC/workouts-deadlift.gif',
    },
    {
      exercise: 'Pull-Ups',
      gif: 'https://thumbs.gfycat.com/LonelyBlondEstuarinecrocodile.webp',
    },
    {
      exercise: 'Rows',
      gif: 'https://media.tenor.com/qVxeKiV_ZG4AAAAC/weights-skinny-guy.gif',
    },
  ],
  legs: [
    {
      exercise: 'Squats',
      gif: 'https://media.tenor.com/1NY6qOs30XIAAAAC/goblet-squad.gif',
    },
    {
      exercise: 'Lunges',
      gif: 'https://media.tenor.com/fWiC9Ze5eUMAAAAC/lunges-exercise.gif',
    },
    {
      exercise: 'Deadlifts',
      gif: 'https://media.tenor.com/TXC6tjVjIywAAAAC/workouts-deadlift.gif',
    },
  ],
  shoulder: [
    {
      exercise: 'Overhead Press',
      gif: 'https://media.tenor.com/ZR-_3Mxq0gYAAAAd/arnold-press.gif',
    },
    {
      exercise: 'Lateral Raises',
      gif: 'https://media.tenor.com/rogbjO9DVF8AAAAC/standing-lateral-raise-lateral-raise.gif',
    },
    {
      exercise: 'Front Raises',
      gif: 'https://media.tenor.com/T-L7dxrLv7EAAAAd/workouts-deadlift.gif',
    },
  ],
  arms: [
    {
      exercise: 'Bicep Curls',
      gif: 'https://media.tenor.com/ZHZyEtvYLbsAAAAM/fabiola-boulanger-bicep.gif',
    },
    {
      exercise: 'Tricep Dips',
      gif: 'https://media.tenor.com/b5xcjuJpdi4AAAAC/brazosms.gif',
    },
    {
      exercise: 'Skull Crushers',
      gif: 'https://media.tenor.com/Zr4aVZVbkjgAAAAC/workout-weights.gif',
    },
  ],
  abs: [
    {
      exercise: 'Crunches',
      gif: 'https://media.tenor.com/vFqz6XYPKPIAAAAM/abdominal-supra-abdominal.gif',
    },
    {
      exercise: 'Planks',
      gif: 'https://media.tenor.com/oMn86R4_ncIAAAAC/abd.gif',
    },
    {
      exercise: 'Mountain climbers',
      gif: 'https://media.tenor.com/JByBVZCIFdsAAAAM/mountain-climbers.gif',
    },
    
  ],
  biceps: [
    {
      exercise: 'Bicep curls',
      gif: 'https://media.tenor.com/JOkZmNENGU0AAAAC/bicep-curl-biceps.gif',
    },
    {
      exercise: 'Preacher Curls',
      gif: 'https://media.tenor.com/kkNwlMdq3lAAAAAd/biceps-workout-work-out.gif',
    },
    {
      exercise: 'Mountain climbers',
      gif: 'https://media.tenor.com/Lq4uADWXzpUAAAAd/pull-ups-working-out.gif',
    },
  ],
  forearms: [
    {
        exercise: 'Wrist Curls',
        gif: 'https://media.tenor.com/J3eICLvit4kAAAAC/wrist-curl-bar.gif',
    },
    {
        exercise:'Hammer Curls',
        gif: 'https://media.tenor.com/XWnWViXkK1MAAAAC/greeg-sulkin-work-out.gif',
    },
    {
        exercise: 'Farmer Walks ',
        gif: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTNiODYwNTg3YmJhNGUxOTg2NWU1YmYxNzA2ZDVlMzlhNDA1MjZhMyZjdD1n/3oKIPz1pK2Mg42bUk0/giphy.gif',
    },

  ],
};

// Get references to the HTML elements
// Function to generate exercise recommendations based on muscle group
function generateRecommendations(muscle) {
  // Find the corresponding exercises for the selected muscle group
  const exercises = muscleGroups[muscle];

  // Empty the previous recommendations
  const recommendations = document.getElementById('recommendations');
  recommendations.innerHTML = '';

  // Loop through the exercises and create HTML elements for each one
  for (let i = 0; i < exercises.length; i++) {
    const exercise = exercises[i];

    // Create HTML elements for the exercise name and GIF
    const exerciseName = document.createElement('h2');
    exerciseName.innerText = exercise.exercise;

    const exerciseGif = document.createElement('img');
    exerciseGif.src = exercise.gif;

    // Create a container div for the exercise name and GIF
    const exerciseContainer = document.createElement('div');
    exerciseContainer.appendChild(exerciseName);
    exerciseContainer.appendChild(exerciseGif);

    // Add the exercise container to the recommendations element
    recommendations.appendChild(exerciseContainer);
  }
}

// Add event listeners to the muscle group buttons
const chestButton = document.getElementById('chest');
chestButton.addEventListener('click', function() {
  generateRecommendations('chest');
});

const backButton = document.getElementById('back');
backButton.addEventListener('click', function() {
  generateRecommendations('back');
});

const legsButton = document.getElementById('legs');
legsButton.addEventListener('click', function() {
  generateRecommendations('legs');
});

const shouldersButton = document.getElementById('shoulder');
shouldersButton.addEventListener('click', function() {
  generateRecommendations('shoulder');
});

const armsButton = document.getElementById('arms');
armsButton.addEventListener('click', function() {
  generateRecommendations('arms');


});
const absButton = document.getElementById('abs');
absButton.addEventListener('click', function() {
  generateRecommendations('abs');


});

const bicepButton = document.getElementById('biceps');
bicepButton.addEventListener('click', function() {
  generateRecommendations('biceps');


});

const forearmButton = document.getElementById('forearms');
forearmButton.addEventListener('click', function() {
  generateRecommendations('forearms');


});