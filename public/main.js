import { carService } from './services/car.service.js'


carService.query()
    .then(cars => {
        console.log('Cars:', cars);
    })