export default class SwapiService {

    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';

    getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if( !res.ok ) {
        throw new Error(`Could not fetch ${url} received ${res.status}` );
      };
  
      return await res.json();
    };

    getPersonImage = ({id}) => {
      return `${this._imageBase}/characters/${id}.jpg`;
    }
    
    getPlanetImage = ({id}) => {
      return `${this._imageBase}/planets/${id}.jpg`;
    }

    getStarshipImage = ({id}) => {
      return `${this._imageBase}/starships/${id}.jpg`;
    }
  
    getAllPeople = async () => {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
      const person = await this.getResource(`/people/${id}/`);
      return this._transformPerson(person);
    }
    
    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transfornPlanet);
    };

    getPlanets = async (id) => {
      const planet = await this.getResource(`/planets/${id}/`);
      return this._transfornPlanet(planet)
    }
    
    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarships);
    };

    getStarship = async (id) => {
      const starship = await this.getResource(`/starships/${id}/`);
      return this._transformStarships(starship);
    }

    _transformPerson = (person) => {
      return{
        id: this._extractId(person),
        name: person.name,
        gender: person.gender,
        eyeColor: person.eye_color,
        birthYear: person.birth_year
      }
    }

    _transfornPlanet = (planets) => {
      return{
        id: this._extractId(planets),
        name: planets.name,
        population: planets.population,
        rotationPeriod: planets.rotation_period,
        diameter: planets.diameter
      }
        
    }

    _transformStarships = (starship) => {
      return{
        id: this._extractId(starship),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.cost_in_credits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargoCapacity: starship.cargo_capacity 
      }

    }
    
    _extractId = (item) => {
      const idRegExp = /\/([0-9]*)\/$/;  
      return item.url.match(idRegExp)[1];
    }

};

// const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {

//     people.forEach((p) => {
//         console.log(p.name);
//     });
    
// });

// swapi.getPerson(5).then((p) => {

//         console.log('function getPerson return', p.name);
    
// });

// swapi.getAllPlanets().then((planets) => {

//     planets.forEach((p) => {
//         console.log(p.name);
//     });
    
// });

// swapi.getPlanets(5).then((p) => {

//     console.log('function getPlanets return', p.name);

// });

// swapi.getAllStarships().then((starship) => {

//     starship.forEach((p) => {
//         console.log(p);
//     });
    
// });

// swapi.getStarship(5).then((p) => {

//     console.log('function getStarship return', p.name);

// });
