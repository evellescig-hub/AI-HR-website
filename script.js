const ctx = document.getElementById('aiChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hiring Speed', 'Cost Reduction', 'Accuracy', 'Employee Insights'],
        datasets: [{
            label: 'Impact of AI in HR (%)',
            data: [80, 70, 85, 75]
        }]
    },
    options: {
        responsive: true
    }
});
