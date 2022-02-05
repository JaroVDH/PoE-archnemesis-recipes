(function() {
	const modList = document.querySelector('.mod-list'),
		detailTag = document.querySelector('.detail-tag'),
		detailIcon = document.querySelector('.detail-icon'),
		detailRecipe = document.querySelector('.detail-recipe'),
		detailRecipeContainer = document.querySelector('.detail-recipe-container'),
		detailUsedIn = document.querySelector('.detail-used-in'),
		detailUsedInList = document.querySelector('.detail-used-in-list');

	function getModIconUrl(mod) {
		return `https://web.poecdn.com/image/layout/siegeoftheatlaslogo.png?1642649381117`; // TODO
	}

	function buildModItem(mod) {
		const container = document.createElement('button'),
			icon = document.createElement('img'),
			tag = document.createElement('span');

		icon.className = 'mod-icon';
		icon.src = getModIconUrl(mod);

		tag.className = 'mod-tag';
		tag.innerText = mod;

		container.className = `mod mod-${window.MODS[mod].type}`;
		container.type = 'button';
		container.appendChild(icon);
		container.appendChild(tag);
		container.addEventListener('click', () => showModDetails(mod));

		return container;
	}

	function buildModList() {
		Object.keys(window.MODS).forEach((mod) => {
			modList.appendChild(buildModItem(mod));
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
