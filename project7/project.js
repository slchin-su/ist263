function mobileMenu() {
    document.getElementsByClass('fullnav').style.display = 'block'
  }

function redeemMessage () {
  alert ('Your promotion has been redeemed!');
  }


// Makes the "plus" turn into a "minus" (with help from ChatGPT)
function foodOn(plusIcon) {
  const ingredientDiv = plusIcon.closest('.ingredientbutton');
  const minusIcon = ingredientDiv.querySelector('.fa-circle-minus');

  plusIcon.style.display = 'none';
  minusIcon.style.display = 'inline-block';

  const parent = ingredientDiv.parentElement;
  const children = Array.from(parent.children);
  ingredientDiv._originalParent = parent;
  ingredientDiv._originalIndex = children.indexOf(ingredientDiv);

  document.getElementById('selectedIngredients').appendChild(ingredientDiv);
}

function foodOff(minusIcon) {
  const ingredientDiv = minusIcon.closest('.ingredientbutton');
  const plusIcon = ingredientDiv.querySelector('.fa-circle-plus');

  plusIcon.style.display = 'inline-block';
  minusIcon.style.display = 'none';

  const parent = ingredientDiv._originalParent;
  const index = ingredientDiv._originalIndex;

  if (parent && index !== undefined) {
    const currentChildren = Array.from(parent.children);
    const nextSibling = currentChildren[index] || null;

    parent.insertBefore(ingredientDiv, nextSibling);
  }
}




