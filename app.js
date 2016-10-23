
let superHeroesData = [
  {name: "Batman" , phoneNumber: "202-555-0145" , universe: "DC" , img_url:"https://www.eaglemoss.com/uploads/142005360377776/original.jpg", },
  {name: "The Flash" , phoneNumber: "202-555-0126" , universe: "DC" , img_url: "http://media.dcentertainment.com/sites/default/files/styles/character_thumb_160x160/public/CharThumb_215x215_flash_52ab9cddbe41e4.12336956.jpg?itok=MC7QDpJO", },
  {name: "Night Wing" , phoneNumber: "202-555-0131", universe: "DC", img_url:"http://www.2-clicks-comics.com/images/category_image/Nightwing%20comics.jpg", },
  {name: "Spider-Man" , phoneNumber: "202-555-0134" , universe: "Marvel" , img_url: "https://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg", },
  {name: "Wolverine" , phoneNumber: "202-555-0126", universe: "Marvel" , img_url: "https://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf/standard_xlarge.jpg", },
  {name: "Captain Marvel" , phoneNumber: "202-555-0159" , universe: "Marvel" , img_url: "https://i.annihil.us/u/prod/marvel/i/mg/c/10/537ba5ff07aa4/standard_xlarge.jpg", }

]
angular
  .module("superHeroApp", [])
  .controller("superHeroCtrl", [heroController])

  function heroController (){
    this.heroes = superHeroesData
    this.newHeroData = {} //First I make an empty object, then let hero sets the items into the empty object.
    this.newHero = function(){
      let hero = {name: this.newHeroData.name, phoneNumber: this.newHeroData.phoneNumber, universe: this.newHeroData.universe, img_url: this.newHeroData.img_url}
      this.heroes.push(hero) // then I push the object("hero") into the original array.
    }
  }
