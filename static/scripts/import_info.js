// CORS doesn't let you import a JSON without jumping through some
// annoying hoops, this is the nuclear option. We might be able to
// fix this using flask at some point going forward. Not too important
// either way given this is an external file.
const data =
[
	{
		"name"	: "Godrick the Grafted",
		"desc"	: "Ruler of Stormveil Castle, is determined to gain more power by grafting arms of slain tarnished he has slain onto his body, and seeks to cement his rule of Limgrave. He is a distant descendant of Godfrey, and was once known as Godrick the Golden. He is a coward by nature and is seen as the weakest of his kin and even had disguised himself as a woman to escape General Rodhan.",
		"img"	: "static/bosses/Godrick.png",
		"tips"	: "His attacks during the first phase are mostly melee and have long wind ups, the only ranged attack in this phase is a ranged wind attack, to dodge this delay your roll and wait for the wind to start curling towards a direction then dodge the opposite way. If you are a melee build then adopt a poke strategy for the first phase, waiting for openings and getting some hits in then backing away since a lot of his swings have wide AoE. The second phase is when he gains new attacks thanks to his new dragon head. These attacks can seem scary, but leave him wide open to attacks from his back allowing for free damage. Also during his phase he gains a ground smash that has a large AoE, this can be easily avoided by jumping during the shockwaves with proper timing. Another General Tip is to try and keep moving as much as possible, try to make sure you are always on his side or back since a lot of his attacks are centered in front of the way he is facing."
	},
	{
		"name"	: "Rennala Queen of The Full Moon",
		"desc"	: "The last Queen of Carian, she was imprisoned in the grand library of the Academy of Raya Lucaria. She was married to Radagon,and they had three children: Ranni,Radahn and Rykard. When Radagon leaves and becomes Queen Marikas consort, she goes mad and becomes obsessed with rebirth.",
		"img"	: "static/bosses/Rennala.png",
		"tips"	: "Rennalla herself is very resistant to magic damage as well and also boasts good resistances to other elemental effects except for bleed. This however comes at a cost that she takes more physical damage than other bosses. The first phase of the boss just revolves around killing specific students that have a golden bubble around them and are singing to hold her shield up. Once you kill enough Rennala will fall to the ground and become vulnerable to damage. The second phase is harder with Rennalla herself fighting you and casting several spells. She will also start the fight by casting a powerful beam that can easily one shot if not dodged. A good tip is to be aggressive especially if you are melee because she can be easily staggered and ending the fight fast is recommended so she doesn’t get to summon multiple creatures at once. If the dragon gets summoned, you can dodge through the fire with good timing and get hits into Rennala while she is recovering from the summoning. If you are playing a mage build, a good spell to use against her is Rock Sling, or any other spell that deals physical damage."
	},
	{
		"name"	: "Starscourge Radahn",
		"desc"	: "Son of Queen Rennala and Radagon, and strongest of the demigods, he was able to command the stars and hold them in place with his strong gravity magic. He ruled over Caelid from Redmane Castle and was a great warrior wanting to be like the First Elden Lord Godfrey. During the Shattering, he led his armies against the forces of other demigods, and fought his half sister Malenia. The two ended up in a stalemate until Malenia unleashed the Scarlet Rot inside her and infected Radahn. The rot ended up causing him to go mad and become a mindless beast that only wanted to eat the flesh of friend or foe alike.",
		"img"	: "static/bosses/Radahn.png",
		"tips"	: "Since the fight starts with the tarnished being far away from Rodahn, you need to work your way up to him. He will fire long range arrows that can be dodged or blocked by the surrounding debris. There will also be golden summoning signs all around the arena that allow for NPCs to be called. Using these NPCs is highly recommended if you are having trouble as they can distract Radahn allowing for free hits. Radahn is also very weak to Scarlet Rot, so using items/spells that inflict rot is a good way to end the fight quickly as inflicting him once will bring him down to half hp. The second phase starts when he leaps into the air and crashes back down as a meteor, using torrent to run and avoid this attack as it will most likely one shot most players. The second phase isn’t two different from the first, he does get a spinning attack, but can be easily dodged using torrent. Using the summons and making sure your health is topped off is recommended especially if you have low vigor."
	},
	{
		"name"	: "Morgott the Omen King",
		"desc"	: "Son of Queen Marika and the First Elden Lord Godfrey, he has a twin brother Mohg. He is of the Omen race, that were born with horns and tails, this was deemed as a curse and thus both he and his brother were thrown into exile by the Golden Order. After the shattering he returned home and claimed Leyndell for himself after he helped defend it during when other demigods were fighting. He refuses to take the Elden Throne over his loyalty for his mother and will attack all tarnished trying to claim it.",
		"img"	: "static/bosses/Morgott.png",
		"tips"	: "Morgott is resistant to holy damage, but weak to physical slashing damage, so using weapons such as the Bloodhound’s Fang/Uchigatana is recommended. He is quite mobile and tends to leap around the arena only allowing for maybe one or two hits at a time. Be patient and allow him to do slow attacks such as his large hammer swings which after avoiding give an opening for some hits. At 50% life he will stagger and scream while releasing a burst of energy he takes reduced damage during this attack, so this is a good time to either heal or apply status effects from far away using items. It is possible to use the Margit’s Shackle item on this boss if you got it in limgrave, giving a good opening for a lot of damage to be done when he is forced to the ground."
	},
	{
		"name"	: "Rykard, Lord of Blasphemy",
		"desc"	: "Son of Radagon and Rennala, Rykard was a talented fighter and magic user. He was loved by his men and made his home in the volcanic Mt.Gelmir, this is where he discovered ancient hexes and used them as new sorceries. He also traveled to foreiign lands and found a dancer by the name of Tanith who he took as his consort. During the shattering, instead of seeking the other Great Runes he turned against the Golden Order and started a campaign against the Greater Will, he had drawn many followers to his campaign and they held against the armies of the capital. This ended terribly however as Rykard wanted more power and immortality, thus he let himself get eaten by the Elder Serpent in Mt.Glemir , merging with it and becoming immortal. He one day hopes to devour the gods themselves, and still has loyal followers such as Lady Tanith.",
		"img"	: "static/bosses/Rykard.png",
		"tips"	: "This boss revolves around using the Serpent hunter spear obtained in the beginning of the arena.The first phase is the God-Devouring Serpent , keep your distance and just hit it using the spear from range. Once the health bar is depleted the second phase will begin and the fight with Rykard will begin properly. Rykard is very slow and has a lot of openings in between his attacks to get hits in. If you manage to head with the Serpent Hunter he will stagger briefing allowing for more hits. When he gets to 50% life he will raise his sword into the sky and large amount of skulls will rain down and home in on you.Focus on dodging the skulls and Rkyards attacks instead of trying to deal damage, then after the skulls stop start attacking again. An easy way to make this fight easier is to summon the Mimic Tear ashes while having the Serpent-Hunter equipped."
	},
	{
		"name"	: "Mohg, Lord of Blood",
		"desc"	: "One of the demigods born of Queen Marika and twin brother of Morgott. Mohg wanted to obtain godhood, thus he kidnapped his half brother Miquella in an effort to become his consort. Miquella himself was trying to cure his own curse of eternal youth by using the Haligtree and a cocoon. Mohg wanted to help Miquella become a god, but with his own plan by using a large quantity of blood and magic. This however did not work and Miquella has never revived and remained in his cocoon dormant not responding to Mohg.This has not stopped Mogh from striving to create his own dynasty: The Mohgywnn dynasty.",
		"img"	: "static/bosses/Mohg.png",
		"tips"	: "Mogh is highly resistant to fire damage, and is also moderately resistant to magic,lightning, and holy. He has little physical resistance and has lower bleeding resistance. During the first half of the fight, Mohg will start applying a special debuff to the player called Blood Curse, this will be shown as three rings around the player. Half way through the fight Mogh will start chanting and cause massive blood loss and drain the player’s hp. There is no way to dodge this damage except using a Purifying crystal tear in your flask of wondrous physick. This can only be obtained during the Bloody Finger Hunter Yura Questline. Otherwise you will need to save your healing for this part of the fight. After this he will go into phase two giving his weapons swings that spray bloodflame after every attack that will cause bleed build up.This best way to avoid this is to stay as close to Mohg as possible since the bloodflame will not land directly on him. Keep an eye on your blood loss meter and run away when it gets high to make sure that the stagger from blood loss doesn’t happen while in close proximity to Mogh. An effective combination is to use bleed and frostbite to attack him, Mogh also has low poise compared to other bosses making heavy weapons effective against him as well."
	},
	{
		"name"	: "Malenia, Blade of Miquella",
		"desc"	: "Born of Marika and Radagon, Melania is the twin sister of Miquella and a demigod. She was cursed with the plague known as Scarlet Rot from birth that ravages her body. She is a skilled swordsman that wanted to protect her brother no matter what. When she lost her arm due to the rot she had a prosthetic made with a blade attached to it becoming quite skilled with it. She was strong enough to fight Rodhan to a stand still and ended up winning by using the scarlet rot to infect Rodhan. After the fight she entered a deep slumber waiting by the Haligtree for her brother to awaken from his slumber.",
		"img"	: "static/bosses/Malenia.png",
		"tips"	: "Malenia is a fight that will require patient play during the entire fight due to her healing when she hits you or any summons you use even if blocking her strikes.. A good strategy is to use the rivers a blood katana’s weapon art called corpse piler that does fast slashes that have a bit of range and cause large amounts of blood loss buildup. Another strategy is to use a combination of blood loss weapons and frostbite. Most of her attacks have to be dodged by rolling to the side instead of backward or forward. During phase two she gains some more dangerous attacks such as her dive bomb and phantom spirit attacks. The dive bomb is easy enough to dodge since it has a long wind up and leaves her very vulnerable to ranged damage sources since it has a long recovery animation. The phantom spirit attack can be dodged by alternating left to right to avoid it since it will track you if you keep dodging in one direction. Her most devastating/ hard to avoid attack is her waterfowl dance, she will leap into the air and start a long combo chain. This attack can be avoided by running away from her first two dashes then dodging into her on the third dash, and dodging away during the fourth. If you unable to run away from the first two dashes, dodging towards her can work but the timing must be perfect otherwise you will get hit stun locked."
	},
	{
		"name"	: "Lichdragon Fortissax",
		"desc"	: "Was the former companion of the old king Godwyn who was corrupted by death. It now guards his body from others who wish to disturb it.",
		"img"	: "static/bosses/Lichdragon.png",
		"tips"	: "This fight is very similar to other dragons except that he has some lightning magic that add some variety. Generally speaking standing in front of his head and running back when he rises to his hind legs is a good and safe strategy that allows for jump attacks when he lowers his head after his attacks. He gains some more attacks during his 2nd phase,such as his lightning spear and glaive attacks, these attacks also cause him to stand on his hind legs making it important to watch his arms and animations to be able to dodge and counter attack correctly."
	},
	{
		"name"	: "Beast Clergyman / Maliketh",
		"desc"	: "Half brother of Queen Marika, and was loyal to her and followed her without question. When Marika took the Rune of Death from the Elden Ring, she imbued into a sword and gave Maliketh the role of protecting and making sure the Destined Death would never be unleashed again. A fragment of the rune was taken by a group of Numen Assassins led by Ranni and they imbued it into their daggers which allowed them to kill Demigods. This lead to the death of Godwyn the Golden and Ranni, causing the Shattering. He was ashamed that he allowed the fragment to be stolen, he bound the blade into his own flesh to make sure it would not happen again.",
		"img"	: "static/bosses/Maliketh.png",
		"tips"	: "The fight starts with the beast clergyman, a spell caster that has a couple of melee attacks. Using a shield and staying close to the clergyman is a good strategy that is easy to execute, if you need to heal, run and hide behind a pillar since he uses ranged spells to punish healing and the pillar will block it. Phase two is when the fight truly begins with Maliketh, he trades his rock spells for fast and large aoe melee swings, where some of them have ranged red energy that must be dodged.Using the pillars will allow you to dodge and avoid most of the ranged attacks, but be aware that his melee swings will go through the pillar. His attacks also cause a damage over time effect that causes you to lose max hp, even when blocking. If you have done Bernahl’s questline and get the Blasphemous Claw item it can parry some of the attacks that Maliketh does which causes him to be dazed for a time, and take additional damage."
	},
	{
		"name"	: "Astel, Natural Born of The Void",
		"desc"	: "A Malformed star that fell and landed in the Lands Between a long time ago, he has immense power of gravity and the stars themselves.",
		"img"	: "static/bosses/Astel.png",
		"tips"	: "At the start of the fight he will always do a laser that does an immense amount of damage, you can dodge through it and start making your way toward him since you will spawn far from him. Keeping in front of his face is the best place to be since it also takes increased damage and most of his moves can be seen from in front of him rather than the sides. At 50% hp he will start to teleport away from you and cast a Meteor Shower spell, the spell looks scary but the areas that it hits are random so stay calm and dodge accordingly while running towards him, the one move that you need to watch out for is his teleport grab. He will teleport above you, dodge and run when this happens so you don’t get grabbed."
	},
	{
		"name"	: "Regal Ancestor Spirit",
		"desc"	: "An animated deer carcass that is possessed by an Ancestral spirit that is revered by the Ancestral followers.",
		"img"	: "static/bosses/Regal.png",
		"tips"	: "Basically the same fight to the Ancestor Spirit that can be fought earlier, best strategy is to get under him which will avoid most attacks without you even needing to dodge. Brining a 100% physical blocking shield will allow you to block most if not all of his attacks and take no damage. One changed aspect of his fight is that he will heal during the fight by stealing life from spirit creatures near him including any ash spirits summoned. Another new attack is a rolling attack that can do alot of damage if not avoided or blocked. This boss also takes increased damage from slashing,holy, and fire damage types."
	},
	{
		"name"	: "Radagon of The Golden Order / Elden Beast",
		"desc"	: "Radagon is the old consort of Queen Marika and also her “other half” which means they have separate wills they were truly one and the same. He was the husband of Rennala until he left her to marry his other half Marika and become the second Elden Lord. He is the father of many of the demigods such as: Radahn,Rykard,Ranni,Malenia and Miquella. Eventually Marika grew disillusioned with the Greater Will and shattered the Elden Ring, Radagon tried to mend it with no avail. This caused the Greater Will to punish them both by fusing them into one body and imprisoning them under the Erdtree. The Elden beast is the living incarnation of the Elden Ring that is bound to Queen Marika and is the embodiment of order.",
		"img"	: "static/bosses/Radagon.png",
		"tips"	: "The first part of the fight involving fighting Radagon, he is very resistant to holy damage and immune to blood loss. Using items such as the Holyproof Dried Liver will reduce the damage he does since a large amount is holy damage. At the start of the fight you can run to him and make a free attack, and potentially even break his poise if you have good poise damage. Godskin magic is especially effective against Radagon since they do fire damage and have a damage over time effect making them a good option for faith builds over holy spells. Alot of his attacks are slow and can be avoided by dodging into him instead of away. His grab is his most dangerous attack but is very slow and is denoted by his arm glowing very blighty.\nThe second part of the fight is the Elden Beast, the elden beast is very resistant to holy damage, but also has decent resistance against magic,fire,and lightning. It is immune to all status effects and can’t be parried. His poise can be broken and has a glowing spot on its stomach that will take increased damage. Try to use physical damage since he has low physical resistance,and don’t use lock on when you are next to the boss this might cause you to miss attacks. Staying in front of him is the best option most of the time since he takes increased damage, only go behind him when he does his fire breath attack and his sword smash. Around 70% life he will swim into the air and make two rings appear under you that after a bit will explode. To avoid this run and jump over the ring that is closing and out of the other ring. Around 50% hp he will shoot out a moving star that will chase the player for a long time rolling at the right time will avoid the large moving star,and you will only take small chip damage from the smaller stars it shoots out, The Crimsonwhorl Bubbletear is a great physic flask to use during this attack as well since it converts damage back to hp."
	},
	{
		"name"	: "Godfrey,First Elden Lord",
		"desc"	: "The first Elden Lord and first husband of Queen Marika, He was a proud warrior and even led the war against the Giants, however after the war and his last worthy opponent fell he lost his warrior spirit. Since his purpose was fulfilled Marika exiled him and made him the first Tarnished, eventually he took the name Hoarah Loux and became the chieftain of the Badland warriors.He returns to reclaim his old mantle of Elden Lord to restore the Golden Order.",
		"img"	: "static/bosses/Godfrey.png",
		"tips"	: "Godfrey is weak to slashing damage, and resistant to holy damage, he can also be poisoned,rotted,frostbit, and hemorrhaged. A good general tip is to jump to avoid all of his stomping attacks, these attacks can be dodged using rolls but the timing is hard and precise so jumping is easier and safer. He is slow and during his first phase his axe attacks can be blocked if you have enough stamina. Staying near him and avoiding his stomp attacks are key for melee players. When his second phase starts and he is called Hoarah Loux he changes his fighting style. Instead of the ax he uses a hand to hand style that uses grappling moves. Blocking is not a good option anymore since the grapples will go through. Instead keep your distance and learn his patterns and wait until he ends one of his chain attacks or leaping attacks where he will be in a recovery animation."
	},
	{
		"name"	: "Fire Giant",
		"desc"	: "The last of the giants that were killed by Queen Marika and Godfrey during their crusade against them. The giants were killed because of the Flame of Ruin that was given to them by a fell god. The flame is one of the only things capable of burning the Erdtree, making it dangerous to Marika and the Golden Order. They sealed the flame away, but were not completely able to extinguish it, so Marika cursed the last giant alive to protect the flame and keep it contained to the mountain, also making the entire mountainland a forbidden place.",
		"img"	: "static/bosses/Fire_Giant.png",
		"tips"	: "The giant is resistant to fire and holy damage, but weak to slashing. You are allowed to use torrent in this fight, so using torrent to get close then dismounting to attack is recommended. During the first phase he has a weak spot on his left leg that takes a large amount of increased damage. Once you break the rope that wraps it he will always roll away from you and get two new attacks that involve either a slow moving fire orb that will explode once you get close, and a faster fireball attack. When the second phase starts and he rips his leg off the weak spot is on his left forearm, which can be hard and dangerous to go for. Instead just stay behind him and use torrent to quickly reposition when he rolls away. Spells that can hit large targets multiple times are especially effective such as Rotten Breath."
	},
	{
		"name"	: "Dragonlord Placidusax",
		"desc"	: "An old ruler of dragons that was ruling during the Age of Dragons as an Elden Lord before the age of the Erdtree and was worshiped by the beastmen serving the Greater Will. Eventually the Greater Will abandoned the dragons and chose humans to be the vessels of the Elden Ring and to make way for the coming of the Erdtree. Originally he had four heads, but during the war against the Golden Order he fought against Godfrey and lost sustaining heavy injuries.He now waits in Farum Azula for his god to return or when the Greater Will returns to it.",
		"img"	: "static/bosses/Placidusax.png",
		"tips"	: "The dragon lord is weaker to pierce damage, and has moderate resistance to all other damage types, he is very resistant to status effects. Compared to other dragon fights Placidusax is a much different fight. He still has the head weak spot but the issue is that he does not give you many opportunities to hit him. This makes the safest and best spot the base of his tail behind his wings so you can avoid his wing attack and won’t cause him to trigger his tail swipe. This also works better against Placidusax than other dragons because he doesn't have any attacks using his back feet. One attack to watchout for his lightning strike, since it can be hard to see the red sparks but can be avoided by either running or rolling before the lightning strikes. The second phase starts at 50%. He will rise into the air and disappear, look around the sky for a storm cloud where he will come out of and dive attack you. Dodging towards him will easily avoid the attack, he will do this a number of times and will be able to target lock him making the attacks easier to dodge. Otherwise the second phase is the same as the first, so stay at his back under his wings."
	}	
]

// Boss info
var name = null;
var desc = null;
var img = null;
var tips = null;;
// Boss ID
var bossNum = null;

// Session variable of selected boss
var bname = sessionStorage.getItem("selBoss");

// Name corresponds to ID as listen in JSON
// (More hard-coded horror)
switch(bname)
{
	case "Godrick the Grafted":
		bossNum = 0;
		break;
	case "Rennala Queen of The Full Moon":
		bossNum = 1;
		break;
	case "Starscourge Radahn":
		bossNum = 2;
		break;
	case "Morgott the Omen King":
		bossNum = 3;
		break;
	case "Rykard, Lord of Blasphemy":
		bossNum = 4;
		break;
	case "Mohg, Lord of Blood":
		bossNum = 5;
		break;
	case "Malenia, Blade of Miquella":
		bossNum = 6;
		break;
	case "Lichdragon Fortissax":
		bossNum = 7;
		break;
	case "Beast Clergyman / Maliketh":
		bossNum = 8;
		break;
	case "Astel, Natural Born of The Void":
		bossNum = 9;
		break;
	case "Regal Ancestor Spirit":
		bossNum = 10;
		break;
	case "Radagon of The Golden Order / Elden Beast":
		bossNum = 11;
		break;
	case "Godfrey,First Elden Lord":
		bossNum = 12;
		break;
	case "Fire Giant":
		bossNum = 13;
		break;
	case "Dragonlord Placidusax":
		bossNum = 14;
		break;
	default:
		console.log("Error getting boss ID!");
}

// Variables assigned
name = data[bossNum].name;
desc = data[bossNum].desc;
img = data[bossNum].img;
tips = data[bossNum].tips;

// Page title set
document.title = name;

document.getElementById("bossname").innerHTML = name;
document.getElementById("bossimg").src = img;
document.getElementById("descr").innerHTML = desc;
document.getElementById("tips").innerHTML = tips;