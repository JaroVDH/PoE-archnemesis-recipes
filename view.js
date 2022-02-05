(function() {
	const modList = document.querySelector('.mod-list'),
		detailTag = document.querySelector('.detail-tag'),
		detailIcon = document.querySelector('.detail-icon'),
		detailRecipe = document.querySelector('.detail-recipe'),
		detailRecipeContainer = document.querySelector('.detail-recipe-container'),
		detailUsedIn = document.querySelector('.detail-used-in'),
		detailUsedInList = document.querySelector('.detail-used-in-list'),
		filterDropOnly = document.querySelector('.filter-droponly'),
		filterRecipeOnly = document.querySelector('.filter-recipeonly'),
		filterSearch = document.querySelector('.filter-search');

	function getModIconUrl(mod) {
		let name = window.MODS[mod].iconName || mod.slice(0, 1) + mod.slice(1).replace(/[^\w]/g, '').toLowerCase(),
			type;

		switch(window.MODS[mod].type) {
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
		container.setAttribute('type', window.MODS[mod].type);
		container.setAttribute('name', mod);
		container.appendChild(icon);
		container.appendChild(tag);
		container.addEventListener('click', () => showModDetails(mod));

		return container;
	}

	function buildModList() {
		Object.keys(window.MODS).forEach((mod) => {
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
			const val = filterSearch.value.toLowerCase().trim();

			modList.querySelectorAll('.mod').forEach((el) => {
				el.style.display = el.getAttribute('name').toLowerCase().includes(val) ? '' : 'none';
			});
		});
	}

	function showUsedIn(mod) {
		const usedInMods = Object.entries(window.MODS).filter(([, {recipe}]) => recipe && recipe.includes(mod)).map(([m]) => m);

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

		if (window.MODS[mod].recipe) {
			const ingredientContainer = document.createElement('div');

			ingredientContainer.className = 'recipe-ingredients';
			window.MODS[mod].recipe.forEach((m) => {
				ingredientContainer.appendChild(buildRecipeTree(m));
			});
			container.appendChild(ingredientContainer);
		}

		return container;
	}

	function showRecipeTree(mod) {
		const recipe = window.MODS[mod].recipe;

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
