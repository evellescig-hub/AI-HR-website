const chart1 = document.getElementById('chart1');

new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['Resume Screening Time Reduced', 'Hiring Efficiency Increase', 'Cost Reduction', 'Employee Insight Improvement'],
        datasets: [{
            label: '% Improvement',
            data: [50, 40, 30, 60]
        }]
    },
    options: {
        plugins: {
            legend: { display: false }
        }
    }
});

const chart2 = document.getElementById('chart2');

new Chart(chart2, {
    type: 'doughnut',
    data: {
        labels: ['Recruitment', 'Payroll Automation', 'Analytics', 'Employee Engagement'],
        datasets: [{
            data: [40, 20, 25, 15]
        }]
    }
});
