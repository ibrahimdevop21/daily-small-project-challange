#include <bits/stdc++.h>
using namespace std;

// Problem 2 - Pronoun Replacement
void ReplacePronouns(string& sentence) {
    if (sentence.empty()) {
        cout << "The input sentence is empty." << endl;
        return;
    }

    istringstream stream(sentence);
    string word;
    string result;

    while (stream >> word) {
        if (word == "he" || word == "He") {
            result += "He or She ";
        } else if (word == "him" || word == "Him") {
            result += "Him or Her ";
        } else if (word == "himself" || word == "Himself") {
            result += "Himself or Herself ";
        } else if (word == "his" || word == "His") {
            result += "His or Her ";
        } else {
            result += word + " "; 
        }
    }

    if (!result.empty()) {
        result.pop_back(); 
    }
    sentence = result; 
}

// Problem 5 - Structure to hold player scores
struct PlayerScore {
    string name;
    int score;
};

// Problem 5 - Add player score and manage the top 10
void addPlayerScore(vector<PlayerScore>& scores, const string& name, int score) {
    scores.push_back({name, score});
    sort(scores.begin(), scores.end(), [](const PlayerScore& a, const PlayerScore& b) {
        return a.score > b.score;
    });
    if (scores.size() > 10) {
        scores.pop_back(); 
    }
}

// Problem 5 - Print the top 10 scores
void printTopScores(const vector<PlayerScore>& scores) {
    cout << "\nTop Scores:\n";
    for (const auto& player : scores) {
        cout << player.name << " : " << player.score << endl;
    }
}

// Problem 5 - Find the highest score of a specific player
void findPlayerHighScore(const vector<PlayerScore>& scores, const string& playerName) {
    int highestScore = -1;
    for (const auto& player : scores) {
        if (player.name == playerName) {
            highestScore = max(highestScore, player.score);
        }
    }

    if (highestScore == -1) {
        cout << playerName << " has not made it to the top 10 or has not been input yet.\n";
    } else {
        cout << playerName << "'s highest score is: " << highestScore << endl;
    }
}

// Problem 5 - Menu system to allow user interaction
void displayMenu() {
    cout << "\n--- Menu ---\n";
    cout << "1. Add new player score\n";
    cout << "2. Print top 10 scores\n";
    cout << "3. Find player's highest score\n";
    cout << "4. Replace pronouns in a sentence\n";
    cout << "5. Exit\n";
    cout << "Enter your choice: ";
}

// Problem 5 - Main function to run the program
int main() {
    vector<PlayerScore> scores;
    int choice;

    do {
        displayMenu();
        cin >> choice;
        cin.ignore(numeric_limits<streamsize>::max(), '\n');

        switch (choice) {
            case 1: {
                string name;
                int score;
                cout << "Enter player name: ";
                getline(cin, name);
                cout << "Enter player score: ";
                cin >> score;
                addPlayerScore(scores, name, score);
                cout << "Player score added successfully.\n";
                break;
            }
            case 2: {
                printTopScores(scores);
                break;
            }
            case 3: {
                string name;
                cout << "Enter player name to search: ";
                getline(cin, name);
                findPlayerHighScore(scores, name);
                break;
            }
            case 4: {
                string sentence;
                cout << "Enter a sentence: ";
                getline(cin, sentence);
                ReplacePronouns(sentence);
                cout << "Converted sentence: " << sentence << endl;
                break;
            }
            case 5:
                cout << "Exiting program...\n";
                break;
            default:
                cout << "Invalid choice. Please select a valid option.\n";
        }
    } while (choice != 5);

    return 0;
}
