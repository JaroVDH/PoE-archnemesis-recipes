(function() {
	const MODS = {
			// Drop Mods
			'Arcane Buffer': {
				type: 'drop',
				iconName: 'EnergyShield'
			},
			'Berserker': {
				type: 'drop',
				iconName: 'Rage'
			},
			'Bloodletter': {
				type: 'drop'
			},
			'Bombardier': {
				type: 'drop'
			},
			'Bonebreaker': {
				type: 'drop'
			},
			'Chaosweaver': {
				type: 'drop',
				iconName: 'Voidtouched'
			},
			'Consecrator': {
				type: 'drop',
				iconName: 'Consecration'
			},
			'Deadeye': {
				type: 'drop'
			},
			'Dynamo': {
				type: 'drop',
				iconName: 'Shocker'
			},
			'Echoist': {
				type: 'drop',
				iconName: 'Caster'
			},
			'Flameweaver': {
				type: 'drop',
				iconName: 'Flametouched'
			},
			'Frenzied': {
				type: 'drop',
				iconName: 'Rampage'
			},
			'Frostweaver': {
				type: 'drop',
				iconName: 'Frosttouched'
			},
			'Gargantuan': {
				type: 'drop'
			},
			'Hasted': {
				type: 'drop',
				iconName: 'Speed'
			},
			'Incendiary': {
				type: 'drop',
				iconName: 'Fire'
			},
			'Juggernaut': {
				type: 'drop'
			},
			'Malediction': {
				type: 'drop',
				iconName: 'Oppressor'
			},
			'Opulent': {
				type: 'drop',
				iconName: 'Wealthy'
			},
			'Overcharged': {
				type: 'drop',
				iconName: 'Chargegenerator'
			},
			'Permafrost': {
				type: 'drop',
				iconName: 'Freezer'
			},
			'Sentinel': {
				type: 'drop',
				iconName: 'Defender'
			},
			'Soul Conduit': {
				type: 'drop'
			},
			'Steel-Infused': {
				type: 'drop',
				iconName: 'Steelattuned'
			},
			'Stormweaver': {
				type: 'drop',
				iconName: 'Stormtouched'
			},
			'Toxic': {
				type: 'drop',
				iconName: 'Poison'
			},
			'Vampiric': {
				type: 'drop'
			},

			// Crafted
			'Assassin': {
				type: 'recipe',
				recipe: ['Deadeye', 'Vampiric']
			},
			'Corpse Detonator': {
				type: 'recipe',
				recipe: ['Necromancer', 'Incendiary'],
				iconName: 'Corpseeploder'
			},
			'Corrupter': {
				type: 'recipe',
				recipe: ['Bloodletter', 'Chaosweaver']
			},
			'Drought Bringer': {
				type: 'recipe',
				recipe: ['Malediction', 'Deadeye'],
				iconName: 'Flaskdrain'
			},
			'Entangler': {
				type: 'recipe',
				recipe: ['Toxic', 'Bloodletter'],
				iconName: 'GraspingVines'
			},
			'Executioner': {
				type: 'recipe',
				recipe: ['Frenzied', 'Berserker']
			},
			'Flame Strider': {
				type: 'recipe',
				recipe: ['Flameweaver', 'Hasted'],
				iconName: 'Fire'
			},
			'Frost Strider': {
				type: 'recipe',
				recipe: ['Frostweaver', 'Hasted'],
				iconName: 'Frostwalker'
			},
			'Heralding Minions': {
				type: 'recipe',
				recipe: ['Dynamo', 'Arcane Buffer'],
				iconName: 'Heraldoftheobelisk'
			},
			'Hexer': {
				type: 'recipe',
				recipe: ['Chaosweaver', 'Echoist']
			},
			'Ice Prison': {
				type: 'recipe',
				recipe: ['Permafrost', 'Sentinel'],
				iconName: 'Cold'
			},
			'Magma Barrier': {
				type: 'recipe',
				recipe: ['Incendiary', 'Bonebreaker'],
				iconName: 'Volatileflameblood'
			},
			'Mana Siphoner': {
				type: 'recipe',
				recipe: ['Consecrator', 'Dynamo'],
				iconName: 'ManaDonut'
			},
			'Mirror Image': {
				type: 'recipe',
				recipe: ['Echoist', 'Soul Conduit'],
				iconName: 'MirrorImage'
			},
			'Necromancer': {
				type: 'recipe',
				recipe: ['Bombardier', 'Overcharged']
			},
			'Rejuvenating': {
				type: 'recipe',
				recipe: ['Gargantuan', 'Vampiric']
			},
			'Storm Strider': {
				type: 'recipe',
				recipe: ['Stormweaver', 'Hasted'],
				iconName: 'Lightningwalker'
			},
			'Crystal-Skinned': {
				type: 'recipe',
				recipe: ['Permafrost', 'Rejuvenating', 'Berserker'],
				iconName: 'LivingCrystal'
			},
			'Effigy': {
				type: 'recipe',
				recipe: ['Hexer', 'Malediction', 'Corrupter'],
				iconName: 'Voodoodoll'
			},
			'Empowered Elements ': {
				type: 'recipe',
				recipe: ['Evocationist', 'Steel-Infused', 'Chaosweaver'],
				iconName: 'Cycleofelements'
			},
			'Empowering Minions': {
				type: 'recipe',
				recipe: ['Necromancer', 'Executioner', 'Gargantuan'],
				iconName: 'Unionofsouls'
			},
			'Evocationist': {
				type: 'recipe',
				recipe: ['Flameweaver', 'Frostweaver', 'Stormweaver'],
				iconName: 'Prismatic'
			},
			'Invulnerable': {
				type: 'recipe',
				recipe: ['Sentinel', 'Juggernaut', 'Consecrator'],
				iconName: 'Divinetouched'
			},
			'Soul Eater': {
				type: 'recipe',
				recipe: ['Soul Conduit', 'Necromancer', 'Gargantuan']
			},
			'Temporal Bubble': {
				type: 'recipe',
				recipe: ['Juggernaut', 'Hexer', 'Arcane Buffer'],
				iconName: 'TimeBubble'
			},
			'Treant Horde': {
				type: 'recipe',
				recipe: ['Toxic', 'Sentinel', 'Steel-Infused'],
				iconName: 'Saplings'
			},
			'Trickster': {
				type: 'recipe',
				recipe: ['Overcharged', 'Assassin', 'Echoist']
			},
			'Abberath-Touched': {
				type: 'boss',
				recipe: ['Flame Strider', 'Frenzied', 'Rejuvenating']
			},
			'Arakaali-Touched': {
				type: 'boss',
				recipe: ['Corpse Detonator', 'Entangler', 'Assassin']
			},
			'Brine King-Touched': {
				type: 'boss',
				recipe: ['Ice Prison', 'Storm Strider', 'Heralding Minions']
			},
			'Lunaris-Touched': {
				type: 'boss',
				recipe: ['Invulnerable', 'Frost Strider', 'Empowering Minions']
			},
			'Shakari-Touched': {
				type: 'boss',
				recipe: ['Entangler', 'Soul Eater', 'Drought Bringer']
			},
			'Solaris-Touched': {
				type: 'boss',
				recipe: ['Invulnerable', 'Magma Barrier', 'Empowering Minions']
			},
			'Tukohama-Touched': {
				type: 'boss',
				recipe: ['Bonebreaker', 'Executioner', 'Magma Barrier']
			},
			'Innocence-Touched': {
				type: 'boss',
				recipe: ['Lunaris-Touched', 'Solaris-Touched', 'Mirror Image', 'Mana Siphoner']
			},
			'Kitava-Touched': {
				type: 'boss',
				recipe: ['Tukohama-Touched', 'Abberath-Touched', 'Corrupter', 'Corpse Detonator']
			},
		},
		modList = document.querySelector('.mod-list'),
		detailTag = document.querySelector('.detail-tag'),
		detailIcon = document.querySelector('.detail-icon'),
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

	function showModDetails(mod) {
		detailIcon.src = getModIconUrl(mod);
		detailTag.innerText = mod;

		showRecipeTree(mod);
		showUsedIn(mod);
	}

	buildModList();
}());
