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
  function displayStats(){
    let name   = hero.name
    let health = hero.health
    let weapon = hero.weapon.type
    let damage = hero.weapon.damage
    let nameSelector = document.querySelector(".name")
    let healthSelector = document.querySelector(".health")
    let weaponSelector = document.querySelector(".weapon")
    let damageSelector = document.querySelector(".damage")

    let nameNode =  document.createTextNode(`Your name:${name}`)
    let healthNode =  document.createTextNode(`Health Status:${health}`)
    let weaponNode =  document.createTextNode(`Weapon of choice:${weapon}`)
    let damageNode =  document.createTextNode(`Strength of weapon:${damage}`)

nameSelector.appendChild(nameNode);
healthSelector.appendChild(healthNode);
weaponSelector.appendChild(weaponNode);
damageSelector.appendChild(damageNode);

  }
  function displayInventory(){


    let vitalsSelector = document.querySelector(".inventory")

    let inventory = hero.inventory

    inventory.forEach(function(entry){
      let weapon = hero.weapon.type
      let weaponNode =  document.createTextNode(`Weapon name:${entry.type} `)
      let weaponSelector = document.querySelector(".currentWeapon")
          weaponSelector.appendChild(weaponNode);

      let damage = hero.weapon.damage
      let damageNode =  document.createTextNode(`Strength of weapon:${entry.damage} `)
      let damageSelector = document.querySelector(".currentDamage")
          damageSelector.appendChild(damageNode);

          //vitalsSelector.appendChild(entry)
    })

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
document.getElementById("equip").addEventListener('click', function(){
  let num = window.prompt("your hero has 3 weapons, pick a number 0 || 1 || 2")
  equipWeapon(hero, num)
})























displayStats()
displayInventory()
