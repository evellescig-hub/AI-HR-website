const ctx1 = document.getElementById('chart1');

new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Hiring Speed', 'Cost Reduction', 'Accuracy', 'Employee Insights'],
        datasets: [{
            label: 'Impact of AI (%)',
            data: [80, 70, 85, 75]
        }]
    }
});

const ctx2 = document.getElementById('chart2');

new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Recruitment', 'Payroll', 'Analytics', 'Employee Engagement'],
        datasets: [{
            data: [35, 20, 25, 20]
        }]
    }
});
