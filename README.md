# Quiz_Master
## Date:
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html>
<head>
    <title>QuizMaster</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>QuizMaster</h1>
    
    <div class="question">
        <p>1. What is 69 + 31?</p>
        <input type="text" id="q1">
    </div>
    
    <div class="question">
        <p>2. Capital of India?</p>
        <input type="text" id="q2">
    </div>
    
    <div class="question">
        <p>3. Capital of Tamil Nadu?</p>
        <input type="text" id="q3">
    </div>

    <div class="question">
        <p>4. President of the United States?</p>
        <input type="text" id="q4">
    </div>

    <div class="question">
        <p>3. Any one nation going through an war currently?</p>
        <input type="text" id="q5">
    </div>
    
    <button id="checkScore">Check Score</button>
    
    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
    font-family: 'Roboto', sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    color: #333;
}

h1 {
    text-align: center;
    color: #2c3e50;
}

.question {
    background: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.question input {
    width: 90%;
    padding: 8px;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    display: block;
    width: 100%;
    padding: 12px;
    background-color: #3498db;
    color: white;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #2980b9;
}

#result {
    margin-top: 20px;
    padding: 15px;
    background-color: #2ecc71;
    color: white;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    display: none;
}
```
## JavaScript Code:
```
document.getElementById('checkScore').addEventListener('click', function() {
    const strictScoring = function() {
        let score = 0;
        if (document.getElementById('q1').value === '100') score++;
        if (document.getElementById('q2').value.toLowerCase() === 'delhi') score++;
        if (document.getElementById('q3').value.toLowerCase() === 'chennai') score++;
        if (document.getElementById('q4').value.toLowerCase() === 'donald trump') score++;
        if (document.getElementById('q5').value.toLowerCase() === 'israel') score++;
        return score;
    };

    const lenientScoring = function() {
        let score = 0;
        const q1 = document.getElementById('q1').value;
        const q2 = document.getElementById('q2').value.toLowerCase();
        const q3 = document.getElementById('q3').value.toLowerCase();
        const q4 = document.getElementById('q4').value.toLowerCase();
        const q5 = document.getElementById('q5').value.toLowerCase();
                
        if (q1 === '100' || q1 === 'one hundred' || q1==='hundred') score++;
        if (q2 === 'delhi') score++;
        if (q3 === 'chennai' || q3 === 'madras') score++;
        if(q4 === 'donald trump' || q4 === 'trump' || q4 === 'republican party') score++;
        if(q5 === 'israel' || q5 === 'palestine' || q5 === 'ukraine' || q5 === 'russia') score++;
        return score;
    };

    function calculateScore(callback) {
        const score = callback();
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Your score: ${score}/5`;
        resultElement.style.display = 'block';
        
        if (score >3) {
            resultElement.style.backgroundColor = '#2ecc71';
        } else if (score ===2 || score ===3 ) {
            resultElement.style.backgroundColor = '#f39c12';
        } else {
            resultElement.style.backgroundColor = '#e74c3c';
        }
    }

    const useStrict = Math.random() > 0.5;
    calculateScore(useStrict ? strictScoring : lenientScoring);
});
```

## Live web page:

## Output:
<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/6280ca30-b602-4097-8b79-a2d240186dc3" />


## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
