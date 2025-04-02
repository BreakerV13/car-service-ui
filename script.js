const apiUrl = 'http://localhost:8080/api/cars';

function openEditCar(id) {
    // Open the editCar.html page with the car ID as a query parameter
    window.open(`editCar.html?id=${id}`, '_blank');
}
        async function fetchCars() {
            const response = await fetch(apiUrl);
            const cars = await response.json();
            const carsContainer = document.getElementById('cars');
            carsContainer.innerHTML = '';
            cars.forEach(car => {
                const carItem = document.createElement('div');
                carItem.className = 'car-item';
                carItem.innerHTML = `
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Price: ${car.price}</p>
                    <p>Year: ${car.year}</p>
                    <button onclick="openCarDetails(${car.id})">View Details</button>
                     <button onclick="openEditCar(${car.id})">Edit Car</button>
                `;
                carsContainer.appendChild(carItem);
            });
        }

        async function fetchCarDetails(id) {
            const response = await fetch(`${apiUrl}/${id}`);
            const car = await response.json();
            const carDetailsContainer = document.getElementById('car-details');
            carDetailsContainer.innerHTML = `
                <h3>${car.brand} ${car.model}</h3>
                <p>Price: $${car.price}</p>
                <p>Year: ${car.year}</p>
                <p>Description: ${car.description}</p>
            `;
        }

        function openCarDetails(id) {
            window.open(`view.html?id=${id}`, '_blank');
        }

        function openAddCar() {
            window.open(`addCar.html`, '_blank');
        }

        async function addCar() {
            const brand = document.getElementById('brand').value;
            const model = document.getElementById('model').value;
            const price = document.getElementById('price').value;
            const year = document.getElementById('year').value;
            const description = document.getElementById('description').value;

            const car = { brand, model, price, year, description };

            console.log(car);

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            });

            if (response.ok) {
                fetchCars();
            } else {
                alert('Failed to add car');
            }
        }

async function fetchCars() {
    const response = await fetch(apiUrl);
    const cars = await response.json();
    const carsContainer = document.getElementById('cars');
    carsContainer.innerHTML = '';
    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <h3>${car.brand} ${car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Year: ${car.year}</p>
            <button onclick="openCarDetails(${car.id})">View Details</button>
            <button onclick="openEditCar(${car.id})">Edit Car</button>
        `;
        carsContainer.appendChild(carItem);
    });
}

async function fetchCarDetails(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    const car = await response.json();
    const carDetailsContainer = document.getElementById('car-details');
    carDetailsContainer.innerHTML = `
        <h3>${car.brand} ${car.model}</h3>
        <p>Price: $${car.price}</p>
        <p>Year: ${car.year}</p>
        <p>Description: ${car.description}</p>
    `;
}

function openCarDetails(id) {
    window.open(`view.html?id=${id}`, '_blank');
}

function openAddCar() {
    window.open(`addCar.html`, '_blank');
}

async function addCar() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;

    const car = { brand, model, price, year, description };

    console.log(car);

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    });

    if (response.ok) {
        fetchCars();
    } else {
        alert('Failed to add car');
    }
}

// Fetch car details for editing
async function fetchCarDetailsForEdit() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const carId = urlParams.get('id');

    if (carId) {
        const response = await fetch(`${apiUrl}/${carId}`);
        const car = await response.json();

        // Populate the form with the car details
        document.getElementById('brand').value = car.brand;
        document.getElementById('model').value = car.model;
        document.getElementById('price').value = car.price;
        document.getElementById('year').value = car.year;
        document.getElementById('description').value = car.description;
    }
}

// Update car details
async function updateCar() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const carId = urlParams.get('id');

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;

    const car = { brand, model, price, year, description };

    const response = await fetch(`${apiUrl}/${carId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    });

    if (response.ok) {
        alert('Car updated successfully!');
        window.close(); // Close the edit page
    } else {
        alert('Failed to update car');
    }
}
async function fetchCarDetailsForEdit() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const carId = urlParams.get('id');

    if (carId) {
        const response = await fetch(`${apiUrl}/${carId}`);
        const car = await response.json();

        // Populate the form with the car details
        document.getElementById('brand').value = car.brand;
        document.getElementById('model').value = car.model;
        document.getElementById('price').value = car.price;
        document.getElementById('year').value = car.year;
        document.getElementById('description').value = car.description;
    }
}

// Update car details
async function updateCar() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const carId = urlParams.get('id');

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;
    const description = document.getElementById('description').value;

    const car = { brand, model, price, year, description };

    const response = await fetch(`${apiUrl}/${carId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    });

    if (response.ok) {
        alert('Car updated successfully!');
        window.close(); // Close the edit page
    } else {
        alert('Failed to update car');
    }
}

async function searchCars() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;

    // Construct the query string
    const query = [];
    if (brand) query.push(`brand=${encodeURIComponent(brand)}`);
    if (model) query.push(`model=${encodeURIComponent(model)}`);
    const queryString = query.length ? `?${query.join('&')}` : '';

    try {
        const response = await fetch(`http://localhost:8080/api/cars/search${queryString}`);
        if (!response.ok) {
            throw new Error('Failed to fetch cars');
        }
        const cars = await response.json();
        displayCars(cars);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching cars');
    }
}

async function searchRecomCars() {
    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;

    // Construct the query string
    const query = [];
    if (brand) query.push(`brand=${encodeURIComponent(brand)}`);
    if (model) query.push(`model=${encodeURIComponent(model)}`);
    const queryString = query.length ? `?${query.join('&')}` : '';

    try {
        const recommendations = await fetch(`http://localhost:8080/api/recommendations/search${queryString}`);
        const cars = await response.json();
        const recomCars = await recommendations.json();
        displayRecomCars(recomCars);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display cars
function displayCars(cars) {
    const carsContainer = document.getElementById('cars');
    carsContainer.innerHTML = ''; // Clear previous results

    if (cars.length === 0) {
        carsContainer.innerHTML = '<p>No cars found</p>';
        return;
    }

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <h3>${car.brand} ${car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Year: ${car.year}</p>
            <button onclick="openCarDetails(${car.id})">View Details</button>
             <button onclick="openEditCar(${car.id})">Edit Car</button>
        `;
        carsContainer.appendChild(carItem);
    });
}

function displayRecomCars(cars) {
    const carsContainer = document.getElementById('recom-cars');
    carsContainer.innerHTML = ''; // Clear previous results

    if (cars.length === 0) {
        carsContainer.innerHTML = '<p>No recommended cars found</p>';
        return;
    }

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'car-item';
        carItem.innerHTML = `
            <h3>${car.brand} ${car.model}</h3>
            <p>Price: ${car.price}</p>
            <p>Year: ${car.year}</p>
            <button onclick="openCarDetails(${car.id})">View Details</button>
        `;
        carsContainer.appendChild(carItem);
    });
}

// Automatically fetch car details for editing when on editCar.html
if (window.location.pathname.includes('editCar.html')) {
    window.onload = fetchCarDetailsForEdit;
}
        fetchCars();