let gender;
let gender1;
const forward = () => {
  gender = document.getElementById("male").checked;
  gender1 = document.getElementById("female").checked;
  console.log(gender);
  if (gender === true || gender1 === true) {
    let temp1 = document.querySelector(".gender");
    console.log(temp1);
    temp1.classList.add("none");
    document.querySelector(".selection").classList.toggle("none");
    if (gender === true) {
      document.querySelector(".whole").classList.toggle("none");

    } else {
      document.querySelector(".women").classList.toggle("none");

    }
  }
}
var type;
var temp4;
const forward1 = () => {

  var inputElements = document.getElementsByClassName('messageCheckbox');
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      type = inputElements[i].value;
      console.log(type);


      if (gender === true) {
        document.querySelector(".whole").classList.toggle("none");
        document.querySelector(".final-sec").classList.toggle("none");
        document.querySelector("#forward").style.display = "none";

      } else {
        document.querySelector(".women").classList.toggle("none");
        document.querySelector(".final-sec").classList.toggle("none");
        document.querySelector("#forward").style.display = "none";

      }
      break;
    }
  }

}

window.onpopstate = () => {
  let temp2 = document.querySelector(".whole").contains("none")
  let temp3 = document.querySelector(".women").contains("none")

  if (!temp2) {
    document.querySelector(".whole").classList.toggle("none");

  }
  if (!temp3) {
    document.querySelector(".women").classList.toggle("none");

  }

}

let ele;
var sub;
let j = 1;

const show = () => {
  document.querySelector(".final-sec").classList.toggle("none");
  document.querySelector("#type-image").style.display = "flex";
  console.log(ele)
  j=1;
  for(let i = 0;i < 45; i++)
{
  if(exercises[i].body_type.includes(type) || exercises[i]==="Hourglass")
  {
    if(j < 4)
    {
      ele = document.getElementsByClassName("p"+j); 
      ele[0].append(exercises[i].exercise_recommendation);
      j++;



      //conditions
      document.getElementById("type").innerHTML = "Exersise for <span style='color:orangered'>"+type+"</span> body type"
  let img = document.getElementById("type-img");
  console.log("lkafgsjhkljipaerokj")
  if(type === "Rectangle")
  {
    if(gender)
    {
      img.src = "http://127.0.0.1:5000/static/male/rectangle-men.png";
    }
    else{
      img.src = "http://127.0.0.1:5000/static/female/rectangle.png";     
    }
    
  }
   if(type === "Rhomboid")
  {
      img.src = "http://127.0.0.1:5000/static/male/rhomboid.png";
  }
   if(type === "Oval")
  {
    if(gender)
    {
      img.src = "http://127.0.0.1:5000/static/male/oval-men.png";
    }
    else{
      img.src = "http://127.0.0.1:5000/static/female/oval.png";     
    }
  }
   if(type === "Inverted")
  {
    if(gender)
    {
      img.src = "http://127.0.0.1:5000/static/male/inverted-men.png";
    }
    else{
      img.src = "http://127.0.0.1:5000/static/female/inverted-triangle.png";     
    }
  }
   if (type === "Triangle")
  {
    if(gender)
    {
      img.src = "http://127.0.0.1:5000/static/male/triangle-men.png";
    }
    else{
      img.src = "http://127.0.0.1:5000/static/female/triangle.png";     
    }
  }
   if(type === "Hourglass")
  {
      img.src = "http://127.0.0.1:5000/static/female/hourglass.png";
      console.log(img.src,"slakfjghkasldjfgirajklsf")
  }
    }

       

  }
  
}
let k = 0;
 let gif;
 if(k < 3)
 {
  gif = document.getElementsByClassName("gif")
  if(type === "Rectangle")
  {
    document.getElementById("type-cap").innerHTML = "The Rectangle body type is also known as the Straight body type, and is characterized by a straight and athletic build with similar measurements at the shoulders, waist, and hips. This body type tends to have a more rectangular or square silhouette and doesn't have many curves. People with this body type tend to have a faster metabolism and can usually eat a wider variety of foods without gaining weight easily";
    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/0578.gif";
    gif[1].src = "http://d205bpvrqc9yn1.cloudfront.net/0809.gif";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/1619.gif"
  }
  else if(type === "Triangle")
  {
    document.getElementById("type-cap").innerHTML = "The Triangle or Pear-shaped body type typically has a smaller upper body and wider hips, thighs, and lower body. This body type tends to carry more weight in the lower half of the body and has a smaller bust and waist in comparison. Individuals with this body type may have difficulty losing weight in the lower body and may also be prone to cellulite. ";
    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/3470.gif";
    gif[1].src = "http://d205bpvrqc9yn1.cloudfront.net/0578.gif";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/3236.gif";

  }
  else if(type === "Rhomboid")
  {
    document.getElementById("type-cap").innerHTML = "Rhomboid is a body type that is characterized by broad shoulders, a narrow waist, and a lean overall build. Individuals with a rhomboid body type typically have well-defined muscles in their upper back, shoulders, and arms. ";
    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/0498.gif";
    gif[1].src = "http://d205bpvrqc9yn1.cloudfront.net/0293.gif";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/2616.gif"

  }
  else if(type === "Inverted")
  {
    document.getElementById("type-cap").innerHTML = "The inverted triangle body type, also known as the apple or v-shape body type, is characterized by broader shoulders and chest with a narrower waist and hips. People with this body type typically have a larger upper body and a smaller lower body.";
    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/0652.gif";
    gif[1].src = "http://d205bpvrqc9yn1.cloudfront.net/0293.gif";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/0652.gif"

  }
  else if(type === "Oval")
  {
    document.getElementById("type-cap").innerHTML = "Oval or round-shaped body type is characterized by having a round or oval-shaped body with more weight around the midsection. People with this body type tend to have a slower metabolism and are more prone to weight gain, particularly in the abdominal area. ";

    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/2331.gif";
    gif[1].src = "http://d205bpvrqc9yn1.cloudfront.net/1494.gif";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/3006.gif"

  }
  else if(type === "Hourglass")
  {
    document.getElementById("type-cap").innerHTML = "Hourglass body type refers to a body shape in which the bust and hips are roughly the same size, with a narrow waist in between. This body type is often considered the ideal feminine body shape, and is characterized by a well-proportioned silhouette.";
    gif[0].src = "http://d205bpvrqc9yn1.cloudfront.net/2331.gif";
    gif[1].src = "";
    gif[2].src = "http://d205bpvrqc9yn1.cloudfront.net/3006.gif"
  }
  
 }

}
let exercises = [{
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "100-140 lbs",
    "height_range": "5'0\"-5'6\"",
    "exercise_name": "Lunges",
    "exercise_recommendation": "Lunges are a great exercise for the lower body, targeting the glutes, quads, and hamstrings. To perform a lunge, step forward with one foot and lower your hips until both knees are bent at a 90-degree angle, then push back up and repeat with the other leg. Aim for 3-4 sets of 10-15 reps per leg, with 30-60 seconds rest between sets. Do this exercise 2-3 times per week."
  }, {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "100-250 lbs",
    "height_range": "5'0\"-6'2\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a great exercise for building strength in the lower body, including the glutes, hamstrings, and lower back. Aim for 3-4 sets of 8-10 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "100-250 lbs",
    "height_range": "5'0\"-6'2\"",
    "exercise_name": "Hip thrusts",
    "exercise_recommendation": "Hip thrusts are an effective exercise for targeting the glutes and hamstrings. Aim for 3-4 sets of 12-15 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },

  {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'4\"-5'10\"",
    "exercise_name": "Squats",
    "exercise_recommendation": "Squats are a great exercise for the lower body, targeting the glutes, quads, and hamstrings. To perform a squat, stand with your feet shoulder-width apart and lower your hips until your thighs are parallel to the ground, then push back up. Aim for 3-4 sets of 10-15 reps, with 30-60 seconds rest between sets. Do this exercise 2-3 times per week."
  }, {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'0\"-6'2\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a compound exercise that works multiple muscle groups, including the glutes, hamstrings, lower back, and core. Aim for 3-4 sets of 6-8 reps, with 2-3 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'0\"-6'2\"",
    "exercise_name": "Bench Press",
    "exercise_recommendation": "Bench Press is a great exercise for strengthening the chest, shoulders, and triceps. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Barbell Squat",
    "exercise_recommendation": "Barbell Squat is a great exercise for building lower body strength and size, including the glutes, quads, and hamstrings. Aim for 3-4 sets of 6-8 reps, with 2-3 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Barbell Squat",
    "exercise_recommendation": "Barbell Squats are great for building leg strength and size. Load up the barbell with a weight you can handle and aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  }, {
    "body_type": "Triangle or Pear-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Military Press",
    "exercise_recommendation": "Military Press is a great exercise for building shoulder strength and size. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "100-140 lbs",
    "height_range": "5'0\"-5'8\"",
    "exercise_name": "Cycling",
    "exercise_recommendation": "Cycling is a great low-impact exercise that can help burn calories and improve cardiovascular health. Aim for at least 30 minutes of cycling, 3-5 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "100-140 lbs",
    "height_range": "5'0\"-5'8\"",
    "exercise_name": "Yoga",
    "exercise_recommendation": "Butterfly yoga can help improve flexibility, balance, and strength. It's also a great way to relieve stress. Aim for at least 30 minutes of yoga, 2-3 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "100-140 lbs",
    "height_range": "5'0\"-5'8\"",
    "exercise_name": "Resistance band training",
    "exercise_recommendation": "Resistance band training is a great way to tone and strengthen muscles. It's also convenient and can be done at home. Aim for 3-4 sets of 10-15 reps for each exercise, with 30-60 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Swimming",
    "exercise_recommendation": "Swimming is a great low-impact exercise that can help burn calories and improve cardiovascular health. Aim for at least 30 minutes of swimming, 3-5 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Pilates",
    "exercise_recommendation": "Pilates can help improve flexibility, core strength, and posture. It's also a great way to relieve stress. Aim for at least 30 minutes of Pilates, 2-3 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Elliptical trainer",
    "exercise_recommendation": "The elliptical trainer is a low-impact exercise machine that can help burn calories and improve cardiovascular health. Aim for at least 30 minutes of elliptical training, 3-5 times per week."
  },
  {
    "body_type": "Oval or round-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Strength training",
    "exercise_recommendation": "Strength training is a great way to build muscle mass and improve metabolism. Aim for 3-4 sets of 8-12 reps for each exercise, with 30-60 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Oval or Round-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Bent-Over Rows",
    "exercise_recommendation": "Bent-over rows are a great exercise for strengthening the upper back and improving posture. With a dumbbell in each hand, hinge at the hips and lower your torso until it's almost parallel to the floor. Keep your back straight and your core engaged. Row the weights up towards your chest, squeezing your shoulder blades together. Lower the weights back down and repeat for 3-4 sets of 10-15 reps, with 30-60 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Oval or Round-shaped",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Bench Press",
    "exercise_recommendation": "Bench press is a great exercise for building strength in the chest, shoulders, and triceps. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a great exercise for building strength in the lower body, including the hamstrings, glutes, and lower back. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  }, {
    "body_type": "Rectangle",
    "weight_range": "100-140 lbs",
    "height_range": "5'6\" - 6'0\"",
    "exercise_name": "Bulgarian Split Squats",
    "exercise_recommendation": "Bulgarian Split Squats are a great exercise for building strength and muscle in the quads and glutes. Aim for 3-4 sets of 8-12 reps per leg, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Single-Arm Dumbbell Rows",
    "exercise_recommendation": "Single-Arm Dumbbell Rows are a great exercise for building strength and muscle in the upper back and lats. Aim for 3-4 sets of 8-12 reps per arm, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-5'8\"",
    "exercise_name": "Barbell Squats",
    "exercise_recommendation": "Barbell Squats are a great exercise for building strength and size in the legs, including the quadriceps, hamstrings, and glutes. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'6\"-6'0\"",
    "exercise_name": "Bent-Over Rows",
    "exercise_recommendation": "Bent-Over Rows are a great exercise for building strength and size in the back, including the latissimus dorsi, rhomboids, and trapezius. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },

  {
    "body_type": "Rectangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'4\"-5'10\"",
    "exercise_name": "Dumbbell Lunges",
    "exercise_recommendation": "Dumbbell Lunges are a great exercise for building strength and size in the legs, including the quadriceps, hamstrings, and glutes. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },

  {
    "body_type": "Rectangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Squats",
    "exercise_recommendation": "Squats are a great compound exercise for building overall lower body strength, including the quads, glutes, and hamstrings. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Bench Press",
    "exercise_recommendation": "Bench Press is a great exercise for building upper body strength and size, particularly in the chest, triceps, and shoulders. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Rectangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a great exercise for building overall lower body strength, particularly in the hamstrings, glutes, and lower back. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Inverted Rows",
    "exercise_recommendation": "Inverted Rows are a great exercise for building upper back and shoulder strength. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Bent-over Rows",
    "exercise_recommendation": "Bent-over Rows are a great exercise for building upper back and shoulder strength. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Lat Pulldowns",
    "exercise_recommendation": "Lat Pulldowns are a great exercise for building upper back and lat strength. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Seated Cable Rows",
    "exercise_recommendation": "Seated Cable Rows are a great exercise for building upper back and shoulder strength. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a great exercise for building lower body and back strength. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Pull-ups",
    "exercise_recommendation": "Pull-ups are a great exercise for building upper back and arm strength. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Dumbbell Rows",
    "exercise_recommendation": "Dumbbell Rows are a great exercise for building upper back and arm strength. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Push-ups",
    "exercise_recommendation": "Push-ups are a great exercise for building chest, triceps, and shoulder strength. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Rhomboid",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Plank",
    "exercise_recommendation": "Plank is a great exercise for building core strength. Aim for holding the position for 30-60 seconds, for 3-4 sets, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Pull-Ups",
    "exercise_recommendation": "Pull-Ups are a great exercise for building upper body strength, especially the back, shoulders, and arms. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Bent-Over Rows",
    "exercise_recommendation": "Bent-Over Rows are a great exercise for building strength and size in the back and shoulders. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "140-180 lbs",
    "height_range": "5'2\"-6'0\"",
    "exercise_name": "Push-Ups",
    "exercise_recommendation": "Push-Ups are a great exercise for building upper body strength, especially the chest, shoulders, and triceps. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  } 
  ,{
    "body_type": "Inverted Triangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Deadlifts",
    "exercise_recommendation": "Deadlifts are a great exercise for building overall strength, especially in the legs, back, and core. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Bench Press",
    "exercise_recommendation": "Bench Press is a great exercise for building upper body strength and size, especially the chest, shoulders, and triceps. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "180-250 lbs",
    "height_range": "5'8\"-6'2\"",
    "exercise_name": "Standing Military Press",
    "exercise_recommendation": "Standing Military Press is a great exercise for building shoulder strength and size. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 1-2 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Push-ups",
    "exercise_recommendation": "Push-ups are a great exercise for building upper body strength and endurance. Aim for 3-4 sets of 8-12 reps, with 1-2 minutes rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Squats",
    "exercise_recommendation": "Squats are a great exercise for building leg and glute strength. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  },
  {
    "body_type": "Inverted Triangle",
    "weight_range": "100-140 lbs",
    "height_range": "4'10\"-5'6\"",
    "exercise_name": "Dumbbell Rows",
    "exercise_recommendation": "Dumbbell Rows are a great exercise for building upper back and shoulder strength. Aim for 3-4 sets of 8-12 reps, with 60-90 seconds rest between sets. Do this exercise 2-3 times per week."
  }
]
