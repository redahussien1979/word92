document.addEventListener('DOMContentLoaded', function() {

  const wordleContainer = document.querySelector('.container');

  let wordlist = [ 'اليمن',
  'ريحان',
  'خديجة',
  'غضنفر',
  'ثعبان',
  'مدريد',
  'سوريا',
  'باريس',
  'لبنان',
  'صوفيا',
  'الهند',
  'القدس',
  'جمبري',
  'صعوبة',
  'سهولة',
  'ملعقة',
  'فنجان',
  'ريحان',
  'سهران',
  'كواكب',
  'نبتون',
  'عطارد',
  'زرافة',
  'كركدن',
  'جرادة',
  'جربوع',
  'منديل',
  'ضفيرة',
  'انقرة',
  'ارهاب',
  'تسبيح',
  'سباحة',
  'عنترة',
  'فلبين',
  'اعصار',
  'زلزال',
  'فيضان',
  'شطرنج',
  'رضوان',
  'شاحنة',
  'جوارح',
  'ثلاثة',
  'وسادة',
  'مفتاح',
  'لذيذة',
  'جاموس',
  'برهان',
  'تلميذ',
  'جيتار',
  'اربعة',
  'شيطان',
  'قنديل',
  'بادية',
  'مراكش',
  'عصيان',
  'يعقوب',
  'زلاقة',
  'فرعون',
  'يرموك',
  'حجارة',
  'هارون',
  'توراة',
  'ادريس',
  'طوفان',
  'بغداد',
  'بشارة',
  'نابلس',
  'سبانخ',
  'مكناس',
  'وسادة',
  'وهران',
  'ذبابة',
  'سفينة',
  'تطوان',
  'صفاقس',
  'تلفاز',
  'كركوك',
  'مختبر',
  'نجران',
  'صابون',
  'جازان',
  'غسالة',
  'حديقة',
  'نيوتن',
  'ماموث',
  'شرارة'];
  let wordhint = ['دولة عربية ',
  'نبات عطري',
  'من زوجات الرسول',
  'من اسماء الاسد',
  'من الزواحف',
  'عاصمة إسبانيا',
  'اسم دولة في الشرق الأوسط',
  'عاصمة فرنسا',
  'اسم دولة في الشرق الأوسط',
  'عاصمة بلغاريا',
   'بلد يحتوي الديانةالهندوسية',
  'عاصمة دولة فلسطين',
  'نوع من أنواع الأسماك',
  'كلمة التي تعني تعقيد',
  'كلمة تعني اليسر',
  'نستخدمها لتناول الطعام',
  'لشرب القهوة',
  'نبات عطري',
  'يقضي الليل دون النوم',
  'تدور حول الشمس',
  'ثامن كواكب النظام الشمسي',
  'الكوكب الأصغر في النظام الشمسي',
  'رقبته طويلة',
  'اسم حيوان',
  'اسم حشرة ',
  'من القوارض',
  'غطاء للرأس',
  'خصلة من الشعر',
  'عاصمة تركيا',
  'ترويع',
  'في الصلاة',
  'رياضة مائية',
  'شاعر جاهلي',
  'دولة اسيوية',
  'ظاهرة طبيعية مدمرة',
  'ظاهرة طبيعية مدمرة',
  'ظاهرة طبيعية مدمرة',
  'لعبة مشهورة',
  'خازن الجنة',
  'لنقل البضائع',
  'جمع جارحة',
  'عدد',
  'للنوم',
  'للقفل',
  'شهية',
  'اسم حيوان',
  'دليل',
  'طالب',
  'الة موسيقية',
  'عدد',
  'عدو الإنسان',
  'حيوان لاسع',
  'حيث يعيش البدو',
  'مدينة مغربية',
  'تمرد',
  'من الأنبياء',
  'معركة بقيادة يوسف بن تاشفين',
  'حاكم طاغية',
  'معركة بقيادة خالد بن الوليد',
  'للبناء',
  'اخ لنبي',
  'كتاب سماوي',
  'اسم نبي',
  'فيضان',
  'عاصمة عربية',
  'خبر سار',
  'مدينة فلسطينية',
  'من الخضراوات',
  'مدينة مغربية',
  'للنوم',
  'مدينة جزائرية',
  'من الحشرات',
  'وسيلة للسفر',
  'مدينة مغربية',
  'مدينة تونسية',
  'جهاز في كل بيت',
  'مدينة عراقية',
  'مكان لاجراء التجارب',
  'مدينة سعودية',
  'للغسيل',
  'مدينة سعودية',
  'لغسل الملابس',
  'بستان',
  'عالم فيزيائي',
  'حيوان منقرض',
  'أول النار'];
  
  let currentRow = 0;
  let nextRowBlock = 0;
  let flag = 0;
  let score = 0;

  let remNotification = 0;
  let gameFin = 0;
  let keyPress;
  let restart;
  let restart2;
  let enterClick;
  let deleteClick;
  let objArray = []
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const container = document.querySelector(".container");
  const containerscore = document.querySelector(".containerscore");

  
  gameStart();
  
  function gameOver(){
    gameFin = 1;
    document.removeEventListener('keyup', deleteClick, false);
    document.removeEventListener('keyup', enterClick, false);
    document.removeEventListener('keyup', keyPress, false);
    document.removeEventListener('keyup', restart, false);
    document.addEventListener('keyup', restart = function(event) {
      if (event.key === 'Enter') {
        document.removeEventListener('keyup', restart, false);

        
        gameStart();
      }
    });
    document.addEventListener('touchend', function(event) {
      document.removeEventListener('keyup', handleRestart);
      gameStart();
      });
  }
  
  function gameStart(){
    wordleContainer.innerHTML = '';
    gameFin = 0;
    currentRow = 0;
    nextRowBlock = 0;
    flag = 0;
    remNotification = 0;
    let rand = Math.floor(Math.random() * wordlist.length);
    chosenWord = wordlist[rand];
  
    let logo = document.createElement('div');
    logo.className = 'logo';
  
    let domName = 'الكلمات';
    for(i = 0; i < domName.length; i++){
      let spanClass = (i == 0 || i % 2 == 0)? 'logo_green' : 'logo_gold';
      let logoSpan = document.createElement('span');
      logoSpan.className = spanClass;
      logoSpan.innerText = domName[i];
      logo.append(logoSpan);
    }
  
    wordleContainer.append(logo);
  
    let navBar = document.createElement('div');
    navBar.className = 'nav_bar';
      let giveUpBtn = document.createElement('button');
      giveUpBtn.id = 'giveUpBtn';
      giveUpBtn.innerText = 'انسحاب';
      giveUpBtn.addEventListener("click", function quitClick(event) {
        if(gameFin == 0){
          notification.innerText = 'الكلمة كانت ' + chosenWord + '. اضغط على Enter للعب مرة أخرى';
          gameOver();
        }
      });
    navBar.append(giveUpBtn);
    wordleContainer.append(navBar);
  
    let gameArea = document.createElement('div');
    gameArea.className = 'game_area';
    for(i = 0; i < 6; i++){
      let row = document.createElement('div');
      row.className = 'row';
      for(j = 0; j < 5; j++){
        let rowBlock = document.createElement('div');
        rowBlock.className = 'row_block';
        row.append(rowBlock);
      }
      gameArea.append(row);
    }
    wordleContainer.append(gameArea);
  
    let notification = document.createElement('div');
    notification.id = 'notification';
    notification.innerText = 'ابدأ التخمين!'
    wordleContainer.append(notification);
  
    let keyLayoutTop = 'دجحخهعغفقثصض';
    let keyLayoutMid = 'طكمنتالبيسش';
    let keyLayoutBot = 'ظزوةىرؤئذ';
  
    let keyboard = document.createElement('div');
    keyboard.id = 'keyboard';
  
      let topKeys = document.createElement('div');
      topKeys.id = 'topKeys';
      addKeys(topKeys, keyLayoutTop, 'keyboardKey_s');
      keyboard.append(topKeys);
  
      let midKeys = document.createElement('div');
      midKeys.id = 'midKeys';
      addKeys(midKeys, keyLayoutMid, 'keyboardKey_m');
      keyboard.append(midKeys);
  
      let botKeys = document.createElement('div');
      botKeys.id = 'botKeys';
      let deleteKey = document.createElement('span');
      deleteKey.className = 'keyboardKey_l';
      deleteKey.innerHTML = '&#x2190;';
      deleteKey.addEventListener("click", function deleteClick(event) {
        if(gameFin == 0){
          let wordRow = document.getElementsByClassName('row')[currentRow];
          let rowBlockEl = wordRow.childNodes;
          deleteLetter(rowBlockEl);
        }
      });
      botKeys.append(deleteKey);
      addKeys(botKeys, keyLayoutBot, 'keyboardKey_s');
      let enterKey = document.createElement('span');
      enterKey.className = 'keyboardKey_l';
      enterKey.innerText = 'ادخال';
      enterKey.addEventListener("click", enterClick = function(event) {
        if(gameFin == 0){
          let wordRow = document.getElementsByClassName('row')[currentRow];
          let rowBlockEl = wordRow.childNodes;
          submitWord(wordRow);
        }
      });
      //botKeys.append(enterKey);
      keyboard.append(botKeys);
  
      wordleContainer.append(keyboard);
  
    let alphabet = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
    document.addEventListener('keyup', keyPress = function(event) {
      if (gameFin == 0) {
          let wordleContainerStyle = window.getComputedStyle(wordleContainer);
          if (wordleContainerStyle.display !== 'none') {
              let wordRow = document.getElementsByClassName('row')[currentRow];
              let rowBlockEl = wordRow.childNodes;
              let pressedKey = event.key.toUpperCase();
              
              let validKeys = keyLayoutTop + keyLayoutMid + keyLayoutBot; // Concatenate all key layouts
              
              // Check if the pressed key is among the valid keys
              if (validKeys.includes(pressedKey)) {
                  // Handle the key press
                  for (let i = 0; i < rowBlockEl.length; i++) {
                      let block = rowBlockEl[i];
                      if (block.innerText.trim() === "") {
                          addLetter(rowBlockEl, event.key);
                          break;
                      }
                  }
              }
              
              if (event.key === 'Enter') {
                  submitWord(wordRow);
              }
              if (event.key === 'Backspace') {
                  deleteLetter(rowBlockEl);
              }
          }
      }
  });
  
  }
  
  function deleteLetter(rowBlockEl){
    if(nextRowBlock > 0){
      nextRowBlock--;
      rowBlockEl[nextRowBlock].innerText = '';
    }
  }
  
  function count(str, find) {
      return (str.split(find)).length - 1;
  }
  /////////////////////////////////////////////////////////////////////////////////////
  
  function submitWord(wordRow, keyPress) {
    if (nextRowBlock > 0 && nextRowBlock % 5 == 0) {
        let word = wordRow.innerText.replace(/[\n\r]/g, '');

        let answer = [];
        for (i = 0; i < word.length; i++) {
            let letter = word[i].toUpperCase();
            answer.push(letter);
            let blockClass = 'blockGrey';
            if (chosenWord.toUpperCase().includes(letter)) {
                if (chosenWord[i].toUpperCase() === letter) {
                  flag++;
                    blockClass = ' blockGreen';
                    if (count(word, letter) > count(chosenWord, letter)) {
                        for (j = 0; j < wordRow.childNodes.length; j++) {
                            if (wordRow.childNodes[j].innerText == letter && wordRow.childNodes[j].className == 'row_block  blockGold') {
                                wordRow.childNodes[j].className = 'row_block  blockGrey';
                                let index = answer.indexOf(letter);
                                if (index !== -1) {
                                    answer.splice(index, 1);
                                }
                            }
                        }
                    }
                } else {
                    if (countOccurrences(answer, letter) <= count(chosenWord, letter)) {
                        blockClass = ' blockGold';
                    } else {
                        blockClass = ' blockGrey';
                    }
                }
            }
            wordRow.childNodes[i].className = 'row_block ' + blockClass;
            let keyboard = document.getElementById('keyboard_' + letter);
            if (chosenWord.toUpperCase().includes(letter)) {
                keyboard.className += ' blockGreen';
            } else {
                keyboard.className += ' blockGrey';
            }
        }

        // Check if the entire word is guessed correctly
        if (word.toUpperCase() === chosenWord.toUpperCase()) {
            // Increment score if the entire word is guessed correctly
            notification.innerText = 'أحسنت، لقد فزت! اضغط Enter للعب مرة أخرى';
            

            score++;
            
            updateScoreDisplay(score);
            updateScoreDisplay2(localStorage.getItem('score'),localStorage.getItem('username'),localStorage.getItem('newCountry'));
            gameOver();
            

        }

        if (flag === 5) {
          
          updateScoreDisplay(score);
          setTimeout(function() {
            location.reload();
          }, 2000); // 2000 milliseconds = 2 seconds
          
            notification.innerText = 'أحسنت، لقد فزت! اضغط Enter للعب مرة أخرى';
            updateScoreDisplay2(localStorage.getItem('score'),localStorage.getItem('username'),user.country);

            gameOver();


        } else if (currentRow == 5) {
          
            notification.innerText = 'لقد خسرت. الكلمة كانت ' + chosenWord + '. اضغط Enter للعب مرة أخرى';
            gameOver();
        } else {
            flag = 0;
            nextRowBlock = 0;
            currentRow++;
            if (currentRow === 1) { // Check if the user reaches row 3
                let hint = wordhint[wordlist.indexOf(chosenWord)];
                notification.innerText = 'تلميح: ' + hint;
            }
        }
    } else {
        remNotification = 0;
        notification.innerText = 'يجب أن تكون الكلمة مكونة من 5 أحرف';
    }
    
}
///////////////////////////////////////////////////////////////////////////////////////
function updateScoreDisplay2(score,username,country) {
  // Update the text content of the score display
  //const listItem = document.querySelector('.input-option');
  //const countryName = listItem.textContent.trim();
  
  const countryMap = {
       "tn_ag":    "الجزائر",
"tn_ba":              "البحرين",
"tn_mr":              "موريتانيا",


"tn_dj":              "جيبوتي",

"tn_eg":              "مصر",


"tn_iz":              "العراق",

"tn_jo":              "الأردن",
"tn_ku":              "الكويت",

"tn_le":              "لبنان",

"tn_ly":              "ليبيا",

"tn_mo":              "المغرب",

"tn_mu":              "عمان",

"tn_palestine":              "فلسطين",

"tn_qa":              "قطر",

"tn_sa":              "السعودية",

"tn_so":              "الصومال",

"tn_su":              "السودان",

"tn_sy":              "سوريا",

"tn_ts":              "تونس",

"tn_ae":              "الإمارات العربيّة المتّحدة",

"tn_ym":              "اليمن",


    // ... other country mappings
  };
  
  const countryCode = country.split('-')[0]; 
  const countryName = countryMap[countryCode];

  const scoreDisplay = document.getElementById('scoreDisplay');
  if (scoreDisplay) {
// Clear any existing content
scoreDisplay.innerHTML = '';

// Create span elements
const usernameSpan = document.createElement('span');
const scoreSpan = document.createElement('span');
const countryNameSpan = document.createElement('span');

// Set classes for styling (optional, but recommended for maintainability)
usernameSpan.classList.add('username');
scoreSpan.classList.add('score');
countryNameSpan.classList.add('countryName');

// Set text content
usernameSpan.textContent = username;
scoreSpan.textContent = '  (' +  score  + ')  ';
countryNameSpan.textContent = countryName;

// Apply styling directly (not ideal, but possible)
usernameSpan.style.color = 'black';
usernameSpan.style.fontSize = '1.5em'; // Increase font size slightly
scoreSpan.style.color = 'red';
scoreSpan.style.fontSize = '1.5em'; // Increase font size slightly
countryNameSpan.style.color = 'black';
countryNameSpan.style.fontSize = '1.5em'; // Increase font size slightly
const spaceTextNode = document.createTextNode(' ');

// Append the span elements to the scoreDisplay element
scoreDisplay.appendChild(usernameSpan);
scoreDisplay.appendChild(scoreSpan);
}  // Update score in local storage
  const flagImage = document.getElementById('flagImage'); // Assuming you have an img tag with id 'flagImage' in your HTML
  if (flagImage) {
    flagImage.src = `https://www.worldometers.info//img/flags/small/${country}.gif`;
    flagImage.alt = countryName; // Set the alt attribute to the country name
    flagImage.style.marginRight='110px'
}  
  localStorage.setItem('score', score);
}
/////////////////////////////////////////////////////////////////////////////////////////////

function updateScoreDisplay(score) {
  // Find or create the score display element
  let scoreDisplay = document.getElementById('scoreDisplay');

  const username = localStorage.getItem('username');

  // Send HTTP request to update user's score in the JSON file
  fetch('/updateScore', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, score: score })
  })
  .then(response => {
      if (response.ok) {
          console.log('User score updated successfully');
          // Update score in local storage after successful server update
          localStorage.setItem('score', score);
      } else {
          console.error('Error updating user score');
      }
  })
  .catch(error => {
      console.error('Error updating user score:', error);
  });

/*
// Send HTTP request to get user's score from the server
fetch('/getUserScore', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify({ username: username })
})
.then(response => {
  if (response.ok) {
      return response.json(); // Parse response JSON
  } else {
      throw new Error('Failed to fetch user score');
  }
})
.then(data => {
  const score = data.score;
  const uname=data.username;
  // Extract score from response
  // Update the text content of the score display
  //localStorage.setItem('score', score);

 // const scoreDisplay = document.getElementById('scoreDisplay');
  //scoreDisplay.innerText = `Score: ${score} ${uname}`;
})
.catch(error => {
  console.error('Error fetching user score:', error);
});
*/












}

//////////////////////////////////////////////////////////////////////////

// Function to fetch the top scorers from the server
function fetchTopScorers() {
  fetch('/topScorers')
    .then(response => response.json())
    .then(data => {
      displayTopScorers(data);
    })
    .catch(error => {
      console.error('Error fetching top scorers:', error);
    });
}

// Function to display the top scorers in the UI
function displayTopScorers(scorers) {
  const topScorersList = document.getElementById('topScorersList');
  topScorersList.innerHTML = ''; // Clear previous content

  scorers.forEach((scorer, index) => {
    if (index < 10) {
      const listItem = document.createElement('li');
      const playerName = document.createElement('span');
      playerName.textContent = scorer.username;
      playerName.style.fontWeight = 'bold';
      playerName.style.fontSize = '1.8em'; // Increase font size slightly
      playerName.style.color = 'purple';
      listItem.appendChild(playerName);
      
      const scoreText = document.createElement('span');
scoreText.textContent = ` (${scorer.score})`;
playerName.style.fontWeight = 'bold';
scoreText.style.color = 'red'; // Make score text red
scoreText.style.fontSize = '1.4em'; // Make score text slightly bigger
scoreText.style.marginLeft = '2px'; // Add left margin between the name and score
listItem.appendChild(scoreText);

      const flagImage = document.createElement('img');
      flagImage.src = `https://www.worldometers.info/img/flags/small/${scorer.country}.gif`;
      flagImage.alt = scorer.country;
      listItem.appendChild(flagImage);






      topScorersList.appendChild(listItem);
    }
  });
}

// Call fetchTopScorers when the page loads
window.onload = function() {
  fetchTopScorers();
};

  
  /////////////////////////////////////////////////////////////////////////////////////
  function addKeys(el, layout, keyClass){
    for(i = 0; i < layout.length; i++){
      let j = i;
      let key = document.createElement('span');
      key.className = keyClass;
      key.id = 'keyboard_' + layout[i];
      key.innerText = layout[i];
      key.addEventListener("click", function keyboardPress(event) {
        if(gameFin == 0){
          let wordRow = document.getElementsByClassName('row')[currentRow];
          let rowBlockEl = wordRow.childNodes;
          addLetter(rowBlockEl, layout[j]);
        }
      });
      el.append(key);
    }
  }
  
  function addLetter(rowBlockEl, letter){
    if(remNotification == 0){
        remNotification = 1;
        notification.innerText = '';
    }
    if(nextRowBlock < 5){
        rowBlockEl[nextRowBlock].innerText = letter.toUpperCase();
        nextRowBlock++;
        if(nextRowBlock === 5){ // Check if the last square in the row is filled
            let wordRow = document.getElementsByClassName('row')[currentRow];
            submitWord(wordRow);
        }
    } else {
        // If nextRowBlock exceeds 5, reset it to 4 to stay within the current row
        nextRowBlock = 4;
    }
  }
  
  
  

  /////////////////////////////////////////////////////////////////////////
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.registration-container');

    const usernameInput = document.querySelector('.username-input');
    const passwordInput = document.querySelector('.password-input');
    const countryInput=document.querySelector('.country-input');
    const loginButton = document.querySelector('.login-button');
    const loginFeedback = document.querySelector('.feedback');
    const wordInput = document.querySelector('.word-input');
    const guessButton = document.querySelector('.guess-button');
    const gameFeedback = document.querySelectorAll('.feedback')[1];

    const newUsernameInput = document.querySelector('.new-username-input');
    const newPasswordInput = document.querySelector('.new-password-input');
    const newCountryInput = document.querySelector('.option');

document.querySelectorAll('.input-option').forEach(option => option.addEventListener('click', () => {
    const countryName = option.textContent.trim().split(' ')[1];
    newCountryInput.value = countryName;
}));
    const registerButton = document.querySelector('.register-button');
    const registrationFeedback = document.querySelector('.feedback');
////////////////////////////////////////////////////////////////////////////
const autoLogin = () => {
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  scoreDisplay.style.display='none';
  flagImage.style.display='none'
  if (storedUsername && storedPassword) {
      // Attempt login with stored credentials
      fetch('users.json')
          .then(response => response.json())
          .then(users => {
              const user = users.find(user => user.username === storedUsername && user.password === storedPassword);
              if (user) {
                // Store username and password in local storage
                localStorage.setItem('username', storedUsername);
                localStorage.setItem('password', storedPassword);
                //updateScoreDisplay();
                loginContainer.style.display = 'none';
                registerContainer.style.display = 'none';
                flagImage.style.display='block'
                wordleContainer.style.display = 'block';
                containerscore.style.display = 'block';
                logoutButton.style.display='block'

                scoreDisplay.style.display='block'
                updateScoreDisplay2(user.score,user.username,user.country); // Display the user's score

                startGame(); // Start the game after auto-login
                displayInputGrid(); // Display input grid and set cursor

                // Additional logic to initialize score in localStorage
                
                  localStorage.setItem('score', user.score);
                
              }
              else{
                scoreDisplay.style.display='none';
                flagImage.style.display='none'

              }
          })
          .catch(error => console.error('Error fetching users: autologin', error));
  }
};

// Call autoLogin when the page loads
autoLogin();

/////////////////////////////////////////////////////////////////////////
const logoutButton = document.querySelector('.logout-button');

    // Function to clear stored credentials and logout
    const logout = () => {
      // Remove event listeners for key events
    document.removeEventListener('keyup', keyPress, false);
    document.removeEventListener('keyup', deleteClick, false);
    document.removeEventListener('keyup', enterClick, false);
    document.removeEventListener('keyup', restart, false);
      gameOver();
      gameStart();
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('score');
        // Optionally, you may want to clear any other data or reset UI elements here
        // For example, display the login container and hide the wordle container
       loginContainer.style.display = 'block';
       registerContainer.style.display = 'block';
       logoutButton.style.display='none'

        wordleContainer.style.display = 'none';
        containerscore.style.display = 'none';

        scoreDisplay.style.display='none';
        flagImage.style.display='none'
        loginFeedback.textContent = '';

    };

    logoutButton.addEventListener('click', function() {
        logout();
    });
////////////////////////////////////////////////////////////////////////
// Login logic
loginButton.addEventListener('click', function() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  const country = localStorage.getItem('newCountry');


  fetch('users.json')
    .then(response => response.json())
    .then(users => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        // Store username and password in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('newCountry', country);
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        containerscore.style.display = 'block';

        wordleContainer.style.display = 'block';
        scoreDisplay.style.display='block'
        flagImage.style.display='block'
        logoutButton.style.display='block'

        updateScoreDisplay2(user.score,user.username,user.country); // Display the user's score

        startGame(); // Start the game after login
        displayInputGrid(); // Display input grid and set cursor

        // Additional logic to initialize score in localStorage
          localStorage.setItem('score', user.score);
        
      } else {
        loginFeedback.textContent = 'Invalid username or password';
        loginFeedback.style.color = 'red';
      }
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      loginFeedback.textContent = 'Error fetching users login';
      loginFeedback.style.color = 'red';
    });
});

// Register logic
registerButton.addEventListener('click', function() {
  const newUsername = newUsernameInput.value;
  const newPassword = newPasswordInput.value;
  const newCountry = newCountryInput.value;


  if (newUsername.trim() === '' || newPassword.trim() === ''|| newCountry.trim() === '') {
    registrationFeedback.textContent = 'Please enter username and password/country';
    registrationFeedback.style.color = 'red';
    return;
  }

  const userData = { username: newUsername, password: newPassword, country: newCountry, score: 0 }; // Include score in user data

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => {
    if (response.ok) {
      localStorage.setItem('newCountry', newCountry);
      registrationFeedback.textContent = 'Registration successful. You can now login.';
      registrationFeedback.style.color = 'green';
    } else if (response.status === 400) {
      registrationFeedback.textContent = 'Username already exists';
      registrationFeedback.style.color = 'red';
    } else {
      registrationFeedback.textContent = 'Error registering user';
      registrationFeedback.style.color = 'red';
    }
  })
  .catch(error => {
    console.error('Error registering user:', error);
    registrationFeedback.textContent = 'Error registering user';
    registrationFeedback.style.color = 'red';
  });
  
});









});
