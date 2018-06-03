// Variables
const hero = {
  name: 'Julius',
  heroic: true,
  inventory: [{type: "Fermented banana", damage: 10 },
              {type: "Prepared Statement", damage: 5}],
  health: 10,
  weapon: {type: "Laptop", damage: 8,
  }
}


const nemesis = {
  name: 'apiGong',
  badAss: true,
  inventory: [],
  health: 10,
  weapon: {type: "SQLinjections", damage: 5,
  },
}


// Game logic

  function rest(creature){
    creature.health = 10;
    console.log(creature.name + "'s Vitals are restored");
  return creature;
  }

  function pickUpItem(creature, item){
    creature.inventory.push(item);
    console.log(creature.inventory);
      return creature;
  }

  function dealDamage(attacker, defender){
    defender.health -= attacker.weapon.damage
      return defender;
  }

  function equipWeapon(creature, index) {
       creature.weapon = creature.inventory[index];
       creature.inventory.splice(index, 1)
        return creature;
  }

  function doBattle(heroicCreature, creature) {
      if (heroicCreature.heroic != true){
        return null;
        }else {

        while(heroicCreature.health > 0 && creature.health > 0) {

          dealDamage(heroicCreature, creature)


          if (creature.health > 0) {

            dealDamage(creature, heroicCreature)

          }
        }
        if (heroicCreature.health > 0) {
          console.log(creature.name + " won't bother you again!")
          return heroicCreature;
        } else {
          alert(heroicCreature.name + " is down and out")
        }
      }
  }

// UI

document.getElementById("rest").addEventListener('click', function(){
  rest(hero);
})

document.getElementById("item").addEventListener('click', function(){
let weaponize = hero.weapon
pickUpItem(hero, weaponize)
})

document.getElementById("battle").addEventListener('click', function(){
  doBattle(hero, nemesis)

})
