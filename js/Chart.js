
new Chart(document.getElementById("countVisitors"), {
  type: 'pie',
  data: {
    labels: ["VK", "Twitter", "Facebook"],
    datasets: [{
      label: "Users",
      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
      data: [2478,5267,734]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Number of visitors'
    }
  }
});