// Yelp Client ID: fgXPwIJ2vcMx_mU26PrqAw
const apiKey = 'i94eAlZp3Zl6kMsjxx_xViwfMkMVkXUou1jSxyRTIcGrfPYQTPSKXiqGlrIiWqdTGUKOeYCKLkIM-7t4a3Pi9UVVaZGrVlr5LXszYwdRWh5B4NwdEcOouOy6hsASW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                    headers: {
                      Authorization: `Bearer ${apiKey}`
                    }
                  }).then(response => {
                      return response.json();
                  }).then(jsonResponse => {
                  if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    })); // closing bracket for .map call
                  }
                }); // closing bracket for chained .then and arrow function
  }
};

export default Yelp;
