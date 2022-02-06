(function() {
	const MODS = {
			'Arcane Buffer': {
				'type': 'drop',
				'iconName': 'EnergyShield',
				'description': 'Monster has augmented Energy Shield powers and releases a stunning nova when Energy Shield breaks',
				'rewards': ['Essences']
			},
			'Berserker': {
				'type': 'drop',
				'iconName': 'Rage',
				'description': 'Monster Enrages as it loses life',
				'rewards': ['Uniques']
			},
			'Bloodletter': {
				'type': 'drop',
				'description': 'Monster has augmented Bleed powers. Monster Maims nearby enemies',
				'effect': 'Items dropped from the Monster and its Minions are Corrupted',
				'rewards': ['Weapon', 'Trinkets']
			},
			'Bombardier': {
				'type': 'drop',
				'description': 'Monster has augmented Projectile powers and periodically unleashes a barrage of mortars',
				'rewards': ['Weapon', 'Armour']
			},
			'Bonebreaker': {
				'type': 'drop',
				'description': 'Monster has augmented Stun powers. Monster hits are slower and can\'t be evaded',
				'rewards': ['Generic', 'Weapon']
			},
			'Chaosweaver': {
				'type': 'drop',
				'iconName': 'Voidtouched',
				'description': 'Monster is imbued with Chaos Damage and Resistance',
				'rewards': ['Gems']
			},
			'Consecrator': {
				'type': 'drop',
				'iconName': 'Consecration',
				'description': 'Monster periodically creates Consecrated Ground, healing allies and making them immune to curses and ailments',
				'rewards': ['Fragments']
			},
			'Deadeye': {
				'type': 'drop',
				'description': 'Monster is Accurate and applies Marks',
				'rewards': ['Armour', 'Trinkets']
			},
			'Dynamo': {
				'type': 'drop',
				'iconName': 'Shocker',
				'description': 'Monster has augmented Shock powers',
				'rewards': ['Generic', 'Trinkets']
			},
			'Echoist': {
				'type': 'drop',
				'iconName': 'Caster',
				'description': 'Monster repeats skills additional times',
				'rewards': ['Generic', 'Currency']
			},
			'Flameweaver': {
				'type': 'drop',
				'iconName': 'Flametouched',
				'description': 'Monster is imbued with Fire Damage and Resistance',
				'rewards': ['Weapon']
			},
			'Frenzied': {
				'type': 'drop',
				'iconName': 'Rampage',
				'description': 'Monster and allies periodically Enrage',
				'rewards': ['Generic', 'Uniques']
			},
			'Frostweaver': {
				'type': 'drop',
				'iconName': 'Frosttouched',
				'description': 'Monster is imbued with Cold Damage and Resistance',
				'rewards': ['Armour']
			},
			'Gargantuan': {
				'type': 'drop',
				'description': 'Monster is massive, granting more Life, Area of Effect, and Damage',
				'rewards': ['Currency']
			},
			'Hasted': {
				'type': 'drop',
				'iconName': 'Speed',
				'description': 'Monster is faster',
				'rewards': ['Generic']
			},
			'Incendiary': {
				'type': 'drop',
				'iconName': 'Fire',
				'description': 'Monster has augmented Ignite powers',
				'rewards': ['Generic', 'Weapon']
			},
			'Juggernaut': {
				'type': 'drop',
				'description': 'Monster cannot be Slowed or Stunned. Monster gains Endurance Charges',
				'rewards': ['Harbinger']
			},
			'Malediction': {
				'type': 'drop',
				'iconName': 'Oppressor',
				'description': 'Monster has a weakening Aura',
				'rewards': ['DivinationCards']
			},
			'Opulent': {
				'type': 'drop',
				'iconName': 'Wealthy',
				'description': 'Monster is fabulously wealthy',
				'rewards': []
			},
			'Overcharged': {
				'type': 'drop',
				'iconName': 'Chargegenerator',
				'description': 'Monster grants Charges to itself and Allies over time',
				'rewards': ['Trinkets', 'Trinkets']
			},
			'Permafrost': {
				'type': 'drop',
				'iconName': 'Freezer',
				'description': 'Monster has augmented Freeze and Chill powers',
				'rewards': ['Generic', 'Armour']
			},
			'Sentinel': {
				'type': 'drop',
				'iconName': 'Defender',
				'description': 'Monster is imbued with Block and Spell Block. Monster Triggers Reckoning when hit',
				'rewards': ['Armour', 'Armour']
			},
			'Soul Conduit': {
				'type': 'drop',
				'description': 'On death, Monster and nearby Allies are revived',
				'rewards': ['Maps']
			},
			'Steel-infused': {
				'type': 'drop',
				'iconName': 'Steelattuned',
				'description': 'Monster is imbued with Physical Damage and Physical Damage Reduction',
				'rewards': ['Weapon']
			},
			'Stormweaver': {
				'type': 'drop',
				'iconName': 'Stormtouched',
				'description': 'Monster is imbued with Lightning Damage and Resistance',
				'rewards': ['Trinkets']
			},
			'Toxic': {
				'type': 'drop',
				'iconName': 'Poison',
				'description': 'Monster has augmented Poison powers',
				'rewards': ['Generic', 'Gems']
			},
			'Vampiric': {
				'type': 'drop',
				'description': 'Monster has augmented Life Leech powers',
				'rewards': ['Fossils']
			},
			'Assassin': {
				'type': 'recipe',
				'recipe': ['Deadeye', 'Vampiric'],
				'description': 'Monster has augmented Critical powers and has Shroud Walker',
				'rewards': ['Currency', 'Currency']
			},
			'Corpse Detonator': {
				'type': 'recipe',
				'recipe': ['Necromancer', 'Incendiary'],
				'iconName': 'Corpseeploder',
				'description': 'Monster detonates nearby Corpses. Monster periodically creates Corpses',
				'rewards': ['DivinationCards', 'DivinationCards']
			},
			'Corrupter': {
				'type': 'recipe',
				'recipe': ['Bloodletter', 'Chaosweaver'],
				'description': 'Monster inflicts Corrupted Blood on Hit and when Hit. Minions create Corrupted Bubbles on death',
				'effect': 'Items dropped from the Monster and its Minions are Corrupted',
				'rewards': ['Abyss', 'Abyss']
			},
			'Drought Bringer': {
				'type': 'recipe',
				'recipe': ['Malediction', 'Deadeye'],
				'iconName': 'Flaskdrain',
				'description': 'Monster disables Flask effects on hit. Monster has an aura that drains Flask charges and prevents gaining Flask charges',
				'rewards': ['Labyrinth', 'Labyrinth']
			},
			'Entangler': {
				'type': 'recipe',
				'recipe': ['Toxic', 'Bloodletter'],
				'iconName': 'GraspingVines',
				'description': 'Monster creates Thorned Vines that slow and deal Chaos Damage over time.',
				'rewards': ['Fossils', 'Fossils']
			},
			'Executioner': {
				'type': 'recipe',
				'recipe': ['Frenzied', 'Berserker'],
				'description': 'Monster gains Damage based on missing enemy Life. Monster has an aura that prevents enemies recovering Life and Energy Shield above 50%',
				'rewards': ['Legion', 'Breach']
			},
			'Flame Strider': {
				'type': 'recipe',
				'recipe': ['Flameweaver', 'Hasted'],
				'iconName': 'Fire',
				'description': 'Monster leaves Burning Ground in its wake. Minions create Flame Bearers on death',
				'rewards': ['Weapon', 'Weapon', 'Weapon']
			},
			'Frost Strider': {
				'type': 'recipe',
				'recipe': ['Frostweaver', 'Hasted'],
				'iconName': 'Frostwalker',
				'description': 'Monster leaves Chilling Ground in its wake. Minions create Frost Bearers on death',
				'rewards': ['Armour', 'Armour', 'Armour']
			},
			'Heralding Minions': {
				'type': 'recipe',
				'recipe': ['Dynamo', 'Arcane Buffer'],
				'iconName': 'Heraldoftheobelisk',
				'description': 'Monster\'s minions summon invulnerable Lightning Totems on death',
				'rewards': ['Fragments', 'Fragments']
			},
			'Hexer': {
				'type': 'recipe',
				'recipe': ['Chaosweaver', 'Echoist'],
				'description': 'Monster is Hexproof. Monster is followed by a Hexing Effigy that creates Hexing areas',
				'rewards': ['Essences', 'Essences']
			},
			'Ice Prison': {
				'type': 'recipe',
				'recipe': ['Permafrost', 'Sentinel'],
				'iconName': 'Cold',
				'description': 'Monster periodically entraps players in a cage of ice',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['Armour', 'Armour']
			},
			'Magma Barrier': {
				'type': 'recipe',
				'recipe': ['Incendiary', 'Bonebreaker'],
				'iconName': 'Volatileflameblood',
				'description': 'Monster is protected by a Magmatic shield that explodes when depleted. Monster periodically creates Volatile Flamebloods',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['Weapon', 'Weapon']
			},
			'Mana Siphoner': {
				'type': 'recipe',
				'recipe': ['Consecrator', 'Dynamo'],
				'iconName': 'ManaDonut',
				'description': 'Monster is surrounded by a ring that deals Lightning Damage over time as well as draining Mana',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['Trinkets', 'Trinkets']
			},
			'Mirror Image': {
				'type': 'recipe',
				'recipe': ['Echoist', 'Soul Conduit'],
				'iconName': 'MirrorImage',
				'description': 'Monster can create illusions of itself',
				'effect': 'Rewards are rolled 2 additional times, choosing the rarest result',
				'rewards': ['Scarabs']
			},
			'Necromancer': {
				'type': 'recipe',
				'recipe': ['Bombardier', 'Overcharged'],
				'description': 'Monster can raise Undead. Minions are empowered and revive shortly after dying',
				'effect': 'Rewards are rolled 2 additional times, choosing the rarest result',
				'rewards': ['Generic']
			},
			'Rejuvenating': {
				'type': 'recipe',
				'recipe': ['Gargantuan', 'Vampiric'],
				'description': 'Monster has Life Regeneration. Periodically releases a wave that heals nearby allies and prevents enemy Life and Energy Shield recovery',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['Currency']
			},
			'Storm Strider': {
				'type': 'recipe',
				'recipe': ['Stormweaver', 'Hasted'],
				'iconName': 'Lightningwalker',
				'description': 'Monster leaves Shocking Ground in its wake and spawns Lightning Mirages when hit. Minions create Storm Bearers on death',
				'rewards': ['Trinkets', 'Trinkets', 'Trinkets']
			},
			'Crystal-skinned': {
				'type': 'recipe',
				'recipe': ['Permafrost', 'Rejuvenating', 'Berserker'],
				'iconName': 'LivingCrystal',
				'description': 'Monster triggers the creation of Crystals when hit. Crystals explode when the Monster dies',
				'rewards': ['Harbinger', 'Harbinger']
			},
			'Effigy': {
				'type': 'recipe',
				'recipe': ['Hexer', 'Malediction', 'Corrupter'],
				'iconName': 'Voodoodoll',
				'description': 'Monster creates an Effigy of the player. Damage dealt to the Effigy is also reflected to the bonded player',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['DivinationCards', 'DivinationCards']
			},
			'Empowered Elements': {
				'type': 'recipe',
				'recipe': ['Evocationist', 'Steel-Infused', 'Chaosweaver'],
				'iconName': 'Cycleofelements',
				'description': 'Monster cycles between imbued damage of a particular type and immunity to all other damage types',
				'effect': 'Rewards are rolled 1 additional time, choosing the rarest result',
				'rewards': ['Uniques', 'Uniques']
			},
			'Empowering Minions': {
				'type': 'recipe',
				'recipe': ['Necromancer', 'Executioner', 'Gargantuan'],
				'iconName': 'Unionofsouls',
				'description': 'Monster\'s minions are empowered. Minions empower the Monster with additional modifiers on death',
				'rewards': ['Blight', 'Ritual']
			},
			'Evocationist': {
				'type': 'recipe',
				'recipe': ['Flameweaver', 'Frostweaver', 'Stormweaver'],
				'iconName': 'Prismatic',
				'description': 'Monster is imbued with Elemental Damage, Resistances and Ailments',
				'rewards': ['Generic', 'Weapon', 'Armour', 'Trinkets']
			},
			'Invulnerable': {
				'type': 'recipe',
				'recipe': ['Sentinel', 'Juggernaut', 'Consecrator'],
				'iconName': 'Divinetouched',
				'description': 'Monster and its Minions periodically become immune to all Damage. Minions cannot die while Monster is alive',
				'rewards': ['Delirium', 'Metamorphosis']
			},
			'Soul Eater': {
				'type': 'recipe',
				'recipe': ['Soul Conduit', 'Necromancer', 'Gargantuan'],
				'description': 'Monster empowers when nearby allies die. Periodically summons Phantasms',
				'rewards': ['Maps', 'Maps']
			},
			'Temporal Bubble': {
				'type': 'recipe',
				'recipe': ['Juggernaut', 'Hexer', 'Arcane Buffer'],
				'iconName': 'TimeBubble',
				'description': 'Monster is protected by a Temporal Bubble that severely slows those in it and cannot be damaged by those outside of it',
				'rewards': ['Heist', 'Expedition']
			},
			'Treant Horde': {
				'type': 'recipe',
				'recipe': ['Toxic', 'Sentinel', 'Steel-Infused'],
				'iconName': 'Saplings',
				'description': 'Monster\'s minions are replaced with powerful Treants. Some Damage taken from the monster is split between the Treants',
				'effect': 'Monster\'s Minions drop a randomly-chosen Reward Type',
				'rewards': ['Generic']
			},
			'Trickster': {
				'type': 'recipe',
				'recipe': ['Overcharged', 'Assassin', 'Echoist'],
				'description': 'Monster has damage avoidance. Monster periodically Flees',
				'rewards': ['Currency', 'Uniques', 'DivinationCards']
			},
			'Abberath-touched': {
				'type': 'boss',
				'recipe': ['Flame Strider', 'Frenzied', 'Rejuvenating'],
				'description': 'Monster uses the abilities of Abberath',
				'effect': 'Rewards are rolled 4 additional times, choosing the rarest result',
				'rewards': ['Trinkets', 'Trinkets', 'Maps']
			},
			'Arakaali-touched': {
				'type': 'boss',
				'recipe': ['Corpse Detonator', 'Entangler', 'Assassin'],
				'description': 'Monster uses the abilities of Arakaali',
				'effect': 'All Reward Types are Divination Cards',
				'rewards': ['DivinationCards']
			},
			'Brine King-touched': {
				'type': 'boss',
				'recipe': ['Ice Prison', 'Storm Strider', 'Heralding Minions'],
				'description': 'Monster uses the abilities of the Brine King',
				'effect': 'Rewards are rolled 6 additional times, choosing the rarest result',
				'rewards': ['Armour', 'Armour', 'Armour']
			},
			'Shakari-touched': {
				'type': 'boss',
				'recipe': ['Entangler', 'Soul Eater', 'Drought Bringer'],
				'description': 'Monster uses the abilities of Shakari',
				'effect': 'All Reward Types are Uniques',
				'rewards': ['Uniques']
			},
			'Tukohama-touched': {
				'type': 'boss',
				'recipe': ['Bonebreaker', 'Executioner', 'Magma Barrier'],
				'description': 'Monster uses the abilities of Tukohama',
				'effect': 'Rewards are rolled 4 additional times, choosing the rarest result',
				'rewards': ['Weapon', 'Weapon', 'Fragments']
			},
			'Lunaris-touched': {
				'type': 'boss',
				'recipe': ['Invulnerable', 'Frost Strider', 'Empowering Minions'],
				'description': 'Monster uses the abilities of Lunaris',
				'effect': 'All Reward Types have an additional reward',
				'rewards': ['Uniques']
			},
			'Solaris-touched': {
				'type': 'boss',
				'recipe': ['Invulnerable', 'Magma Barrier', 'Empowering Minions'],
				'description': 'Monster uses the abilities of Solaris',
				'effect': 'All Reward Types have an additional reward',
				'rewards': ['Scarabs']
			},
			'Innocence-touched': {
				'type': 'boss',
				'recipe': ['Lunaris-touched', 'Solaris-touched', 'Mirror Image', 'Mana Siphoner'],
				'description': 'Monster uses the abilities of Innocence',
				'effect': 'All Reward Types are Currency',
				'rewards': ['Currency', 'Currency', 'Currency']
			},
			'Kitava-touched': {
				'type': 'boss',
				'recipe': ['Tukohama-touched', 'Abberath-touched', 'Corrupter', 'Corpse Detonator'],
				'description': 'Monster uses the abilities of Kitava',
				'effect': 'Rewards are doubled',
				'rewards': ['Generic']
			}
		},
		modList = document.querySelector('.mod-list'),
		detailTag = document.querySelector('.detail-tag'),
		detailIcon = document.querySelector('.detail-icon'),
		detailDescription = document.querySelector('.detail-description'),
		detailEffect = document.querySelector('.detail-effect'),
		detailRewards = document.querySelector('.detail-rewards'),
		detailRecipe = document.querySelector('.detail-recipe'),
		detailRecipeContainer = document.querySelector('.detail-recipe-container'),
		detailUsedIn = document.querySelector('.detail-used-in'),
		detailUsedInList = document.querySelector('.detail-used-in-list'),
		filterDropOnly = document.querySelector('.filter-droponly'),
		filterRecipeOnly = document.querySelector('.filter-recipeonly'),
		filterSearch = document.querySelector('.filter-search');

	function escapeRegExp(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function getModIconUrl(mod) {
		let name = MODS[mod].iconName || mod.slice(0, 1) + mod.slice(1).replace(/[^\w]/g, '').toLowerCase(),
			type;

		switch (MODS[mod].type) {
			case 'drop': {
				type = 'RareKill';
				break;
			}
			case 'recipe': {
				type = 'Recipe';
				break;
			}
			case 'boss': {
				type = 'Pantheon';
				name = name.replace('touched', '');
				break;
			}
		}

		return `https://web.poecdn.com/image/Art/2DItems/Currency/Archnemesis/Mod${type}${name}.png?locale=1&scale=1`;
	}

	function getRewardIconUrl(reward) {
		switch (reward) {
			case 'Currency':
				return 'https://web.poecdn.com/image/layout/stash/currency-tab-icon.png';
			case 'Uniques':
				return 'https://web.poecdn.com/image/layout/stash/unique-tab-icon.png';
			case 'Fossils':
				return 'https://web.poecdn.com/image/layout/stash/delve-tab-icon.png';
			case 'Maps':
				return 'https://web.poecdn.com/image/layout/stash/map-tab-icon.png';
			case 'DivinationCards':
				return 'https://web.poecdn.com/image/layout/stash/divination-tab-icon.png';
			case 'Fragments':
				return 'https://web.poecdn.com/image/layout/stash/fragment-tab-icon.png';
			case 'Blight':
				return 'https://web.poecdn.com/image/layout/stash/blight-tab-icon.png';
			case 'Gems':
				return 'https://web.poecdn.com/image/layout/stash/gem-tab-icon.png';
			case 'Essences':
				return 'https://web.poecdn.com/image/layout/stash/essence-tab-icon.png';
			case 'Delirium':
				return 'https://web.poecdn.com/image/layout/stash/delirium-tab-icon.png';
			case 'Metamorphosis':
				return 'https://web.poecdn.com/image/layout/stash/metamorph-tab-icon.png';
			case 'Generic':
			case 'Weapon':
			case 'Trinkets':
			case 'Harbinger':
			case 'Ritual':
			case 'Legion':
			case 'Breach':
			case 'Labyrinth':
			case 'Heist':
			case 'Expidition':
			case 'Armour':
			case 'Abyss':
			case 'Scarabs':
			default:
				return null;
		}
	}

	function buildModItem(mod) {
		const container = document.createElement('button'),
			icon = document.createElement('img'),
			tag = document.createElement('span');

		icon.className = 'mod-icon';
		icon.src = getModIconUrl(mod);

		tag.className = 'mod-tag';
		tag.innerText = mod;

		container.className = 'mod';
		container.type = 'button';
		container.setAttribute('type', MODS[mod].type);
		container.setAttribute('name', mod);
		container.appendChild(icon);
		container.appendChild(tag);
		container.addEventListener('click', () => showModDetails(mod));

		return container;
	}

	function buildModList() {
		Object.keys(MODS).forEach((mod) => {
			modList.appendChild(buildModItem(mod));
		});

		filterDropOnly.addEventListener('click', () => {
			if (filterDropOnly.innerText.includes('Hide')) {
				filterDropOnly.innerText = filterDropOnly.innerText.replace('Hide', 'Show');
				modList.querySelectorAll('.mod[type="drop"]').forEach((el) => {
					el.style.display = 'none';
				});
			} else {
				filterDropOnly.innerText = filterDropOnly.innerText.replace('Show', 'Hide');
				modList.querySelectorAll('.mod[type="drop"]').forEach((el) => {
					el.style.display = '';
				});
			}
		});

		filterRecipeOnly.addEventListener('click', () => {
			if (filterRecipeOnly.innerText.includes('Hide')) {
				filterRecipeOnly.innerText = filterRecipeOnly.innerText.replace('Hide', 'Show');
				modList.querySelectorAll('.mod[type="boss"], .mod[type="recipe"]').forEach((el) => {
					el.style.display = 'none';
				});
			} else {
				filterRecipeOnly.innerText = filterRecipeOnly.innerText.replace('Show', 'Hide');
				modList.querySelectorAll('.mod[type="boss"], .mod[type="recipe"]').forEach((el) => {
					el.style.display = '';
				});
			}
		});

		filterSearch.addEventListener('input', () => {
			const searchQuery = new RegExp(filterSearch.value.toLowerCase().split('').map(escapeRegExp).join('.*'), 'i');

			modList.querySelectorAll('.mod').forEach((el) => {
				el.style.display = searchQuery.test(el.getAttribute('name')) ? '' : 'none';
			});
		});
	}

	function showUsedIn(mod) {
		const usedInMods = Object.entries(MODS).filter(([, {recipe}]) => recipe && recipe.includes(mod)).map(([m]) => m);

		if (usedInMods.length === 0) {
			detailUsedIn.style.display = 'none';

			return;
		}

		detailUsedInList.innerHTML = '';
		usedInMods.forEach((mod) => {
			detailUsedInList.appendChild(buildModItem(mod));
		});

		detailUsedIn.style.display = '';
	}

	function buildRecipeTree(mod) {
		const container = document.createElement('div'),
			modWrapper = document.createElement('div');

		container.className = 'recipe';
		modWrapper.className = 'recipe-mod';
		modWrapper.appendChild(buildModItem(mod));
		container.appendChild(modWrapper);

		if (MODS[mod].recipe) {
			const ingredientContainer = document.createElement('div');

			ingredientContainer.className = 'recipe-ingredients';
			MODS[mod].recipe.forEach((m) => {
				ingredientContainer.appendChild(buildRecipeTree(m));
			});
			container.appendChild(ingredientContainer);
		}

		return container;
	}

	function showRecipeTree(mod) {
		const recipe = MODS[mod].recipe;

		if (!recipe) {
			detailRecipe.style.display = 'none';

			return;
		}

		detailRecipeContainer.innerHTML = '';
		detailRecipeContainer.appendChild(buildRecipeTree(mod));

		detailRecipe.style.display = '';
	}

	function buildReward(reward) {
		const container = document.createElement('span');

		container.className = 'reward';

		const iconUrl = getRewardIconUrl(reward);

		if (iconUrl) {
			const icon = document.createElement('img');

			icon.src = iconUrl;
			icon.className = 'reward-icon';
			icon.title = reward;
			icon.alt = reward;

			container.appendChild(icon);
		} else {
			container.innerText += reward;
		}

		return container;
	}

	function showRewards(mod) {
		detailRewards.innerHTML = '';
		MODS[mod].rewards.forEach((reward) => {
			detailRewards.appendChild(buildReward(reward));
		});
	}

	function showModDetails(mod) {
		detailIcon.src = getModIconUrl(mod);
		detailTag.innerText = mod;
		detailDescription.innerText = MODS[mod].description || '';
		detailEffect.innerText = MODS[mod].effect || '';

		showRewards(mod);
		showRecipeTree(mod);
		showUsedIn(mod);
	}

	buildModList();
}());
