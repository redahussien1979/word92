const express = require('express');
const fs = require('fs');
const path = require('path'); // Import path module
const app = express();
const { getCountryFlag } = require('country-flag-icons');

const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/flags', express.static('flags')); // Serve the flags directory statically

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Endpoint to handle user registration
app.post('/register', (req, res) => {
    const { username, password, country } = req.body; // Include 'country' in the destructuring assignment
    if (!username || !password || !country) { // Check if 'username' or 'password' is missing
        return res.status(400).send('Username and password are required'); // Update error message
    }

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        let users = JSON.parse(data);
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }

        // Add score field with default value of 0
        const newUser = { username, password, score: 0 };
        if (country) {
            newUser.country = country;
            const flagPath = path.join(__dirname, 'flags', `${country}.png`); // Assuming flag files are named by country code (e.g., 'USA.jpg')
            if (fs.existsSync(flagPath)) {
                newUser.flagUrl = `/flags/${country}.png`; // Set flag URL if flag file exists
            } else {
                console.error(`Flag not found for country: ${country}`);
            }
        }
        users.push(newUser);
        
        fs.writeFile('users.json', JSON.stringify(users), 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Error writing file');
            }
            res.status(201).send('User registered successfully');
        });
    });
});
/////////////////////////////////////////////////////////////////////////////////////////////////



// Route to handle top scorers request
app.get('/topScorers', (req, res) => {
    fs.readFile('users.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading users file:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      try {
        const users = JSON.parse(data);
        // Sort users by score in descending order
        const sortedUsers = users.sort((a, b) => b.score - a.score);
        // Send the top ten scorers as JSON
        res.json(sortedUsers.slice(0, 10));
      } catch (error) {
        console.error('Error parsing users data:', error);
        res.status(500).send('Internal Server Error');
      }
    });
  });
  
//////////////////////////////////////////////////////////////////////////////////////////////////



app.get('/userData/:username', async (req, res) => {
    const { username } = req.params;
    try {
        // Read user data from JSON file
        const userData = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(userData);

        // Find user by username
        const user = users.find(user => user.username === username);

        if (user) {
            res.json({ success: true, user: { username: user.username, score: user.score } });
        } else {
            res.json({ success: false, message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

















// Endpoint to handle updating user's score
app.post('/updateScore', (req, res) => {
    const { username, score } = req.body;

    // Read users.json file
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        // Parse JSON data
        let users = JSON.parse(data);

        // Find the user
        const user = users.find(user => user.username === username);

        if (!user) {
            return res.status(404).send('User not found');
        }

        // Update user's score
        user.score += 1;

        // Write updated data back to the file
        fs.writeFile('users.json', JSON.stringify(users), 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).send('Error writing file');
            }
            res.status(200).send('User score updated successfully');
        });
    });
});






// Endpoint to handle getUserScore request
app.post('/getUserScore', (req, res) => {
    const username = req.body.username;

    // Read the users data from the JSON file
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading users data:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        // Parse the JSON data
        const users = JSON.parse(data);

        // Find the user with the provided username
        const user = users.find(user => user.username === username);

        if (user) {
            // If the user is found, send back the user's score
            res.json({ score: user.score || 0 }); // If score is null, default to 0
        } else {
            // If the user is not found, send an error response
            res.status(404).json({ error: 'User not found' });
        }
    });
});













app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
