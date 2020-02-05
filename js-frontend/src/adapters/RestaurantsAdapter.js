class RestaurantsAdapter{
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/restaurants'
    }

    getRestaurants(){
        return fetch(this.baseUrl).then(results => results.json()
        )
    }
}