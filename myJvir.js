const scores = [];

function replacePronouns(sentence) {
  if (!sentence) {
    console.log('The input sentence is empty.');
    return;
  }

  const pronounMap = {
    he: 'He or She',
    He: 'He or She',
    him: 'Him or Her',
    Him: 'Him or Her',
    himself: 'Himself or Herself',
    Himself: 'Himself or Herself',
    his: 'His or Her',
    His: 'His or Her',
  };

  const words = sentence.split(' ');
  const result = words.map((word) => pronounMap[word] || word).join(' ');

  console.log('Converted sentence: ' + result);
}

function addPlayerScore(name, score) {
  scores.push({ name, score });
  scores.sort((a, b) => b.score - a.score);
  if (scores.length > 10) {
    scores.pop();
  }
}

function printTopScores() {
  console.log('\nTop Scores:');
  scores.forEach((player) => {
    console.log(`${player.name} : ${player.score}`);
  });
}

function findPlayerHighScore(playerName) {
  const playerScores = scores.filter((player) => player.name === playerName);
  if (playerScores.length === 0) {
    console.log(
      `${playerName} has not made it to the top 10 or has not been input yet.`
    );
  } else {
    const highestScore = Math.max(
      ...playerScores.map((player) => player.score)
    );
    console.log(`${playerName}'s highest score is: ${highestScore}`);
  }
}

function displayMenu() {
  console.log('\n--- Menu ---');
  console.log('1. Add new player score');
  console.log('2. Print top 10 scores');
  console.log("3. Find player's highest score");
  console.log('4. Replace pronouns in a sentence');
  console.log('5. Exit');
}

function main() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const menuActions = {
    1: () => {
      readline.question('Enter player name: ', (name) => {
        readline.question('Enter player score: ', (score) => {
          addPlayerScore(name, parseInt(score));
          console.log('Player score added successfully.');
          menu();
        });
      });
    },
    2: () => {
      printTopScores();
      menu();
    },
    3: () => {
      readline.question('Enter player name to search: ', (name) => {
        findPlayerHighScore(name);
        menu();
      });
    },
    4: () => {
      readline.question('Enter a sentence: ', (sentence) => {
        replacePronouns(sentence);
        menu();
      });
    },
    5: () => {
      console.log('Exiting program...');
      readline.close();
    },
  };

  function menu() {
    displayMenu();
    readline.question('Enter your choice: ', (choice) => {
      if (menuActions[choice]) {
        menuActions[choice]();
      } else {
        console.log('Invalid choice. Please select a valid option.');
        menu();
      }
    });
  }

  menu();
}

main();
