const badges = ["Level-5", "Vrije-keuze-badge-level-4", "Unity-1", "Vrije keuzemodule level-4", "HTML-CSS-2", "CSS-games", "Linux-0", "Level 4", "Datarepresentatie-0", "Minecraft in python-0", "Unity-0", "Python-2", "Joker-3", "JavaScript voor web-0", "Python-1B", "Vrijekeuze module level 3", "SQL-0", "HTML-CSS-1", "Hardware-0", "Level 3", "Blender-0", "Vrije keuzemodule level 2", "Blokjes programmeren-1", "Python-1A", "Embedded-0", "Level 2", "Python-0", "HTML-CSS-0", "Coderclass omgeving-0", "Blokjesprogrammeren-0", "Level-1"];
let aantalbadges = badges.length;
let text1 = document.getElementById("Aantalbadgesbehaald");
let list = document.getElementById("list");

text1.innerHTML = "Ik heb in totaal " + aantalbadges + " badges behaald";
text1.title = aantalbadges;

badges.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  })
