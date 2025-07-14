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