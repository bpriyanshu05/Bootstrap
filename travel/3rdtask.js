// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Slider
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');
    slider.addEventListener('input', function() {
        sliderValue.textContent = slider.value;
    });

    // Accordion
    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    }

    // Tabs
    window.openTab = function(event, tabName) {
        const tabContents = document.getElementsByClassName('tab-content');
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display // script.js

            document.addEventListener('DOMContentLoaded', function() {
                // Slider
                const slider = document.getElementById('slider');
                const sliderValue = document.getElementById('slider-value');
                slider.addEventListener('input', function() {
                    sliderValue.textContent = slider.value;
                });
            
                // Accordion
                const accordions = document.getElementsByClassName('accordion');
                for (let i = 0; i < accordions.length; i++) {
                    accordions[i].addEventListener('click', function() {
                        this.classList.toggle('active');
                        const panel = this.nextElementSibling;
                        if (panel.style.display === 'block') {
                            panel.style.display = 'none';
                        } else {
                            panel.style.display = 'block';
                        }
                    });
                }
            
                // Tabs
                window.openTab = function(event, tabName) {
                    const tabContents = document.getElementsByClassName('tab-content');
                    for (let i = 0; i < tabContents.length; i++) {
                        tabContents[i].style.display = 'none';
                        tabContents[i].classList.remove('active');
                    }
                    const tabButtons = document.getElementsByClassName('tab-button');
                    for (let i = 0; i < tabButtons.length; i++) {
                        tabButtons[i].classList.remove('active');
                    }
                    document.getElementById(tabName).style.display = 'block';
                    document.getElementById(tabName).classList.add('active');
                    event.currentTarget.classList.add('active');
                };
            
                // Fetch data from external API
                const fetchDataButton = document.getElementById('fetch-data-button');
                const dataDisplay = document.getElementById('data-display');
                fetchDataButton.addEventListener('click', function() {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(response => response.json())
                        .then(data => {
                            dataDisplay.innerHTML = '';
                            data.slice(0, 5).forEach(post => {
                                const postElement = document.createElement('div');
                                postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
                                dataDisplay.appendChild(postElement);
                            });
                        })
                        .catch(error => {
                            dataDisplay.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
                        });
                });
            });
            = 'none';
            tabContents[i].classList.remove('active');
        }
        const tabButtons = document.getElementsByClassName('tab-button');
        for (let i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove('active');
        }
        document.getElementById(tabName).style.display = 'block';
        document.getElementById(tabName).classList.add('active');
        event.currentTarget.classList.add('active');
    };

    // Fetch data from external API
    const fetchDataButton = document.getElementById('fetch-data-button');
    const dataDisplay = document.getElementById('data-display');
    fetchDataButton.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                dataDisplay.innerHTML = '';
                data.slice(0, 5).forEach(post => {
                    const postElement = document.createElement('div');
                    postElement.innerHTML = `<h3>${post.title}</h3><p>${post
