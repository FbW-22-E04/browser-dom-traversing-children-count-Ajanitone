// # Counting children

// This is a template from an online site.
// Feel free to explore the files it contains, but this is absolutely not required to be able to complete this exercise.
// What you need is to create your own JavaScript file and make sure it is included in the `index.html` file.

// You can use Visual Code live server to run the project.

// ## 1.
// * Get the children of the element with id `wrapper` and print them to the console as a list.

// * Iterate over them and print their children to the console, as well as how many they are.

// Note: We do not want to do this operation recursively, we just do it for the children of wrapper and its children.

// Note: There are 2 ways to print the number of children - give them both a try.

/**const childrenList = [];

let wrap = document.querySelector("#wrapper");

let wrapName = wrap.nodeName;

childrenList.unshift(wrapName);

wrap = wrap.childNodes;

while (wrap) {
  let wrapName = wrap.nodeName;
  childrenList.unshift(wrapName);

  wrap = wrap.childNodes;
}

console.log(childrenList.join("> "));*/

const wrapper = document.getElementById("wrapper");

// 1.
// Getting the children of the element with id `wrapper` and
// printing to the console as a list.
console.log(wrapper.children, wrapper.childElementCount);

// Iterating over wrapper children, and printing to the console their children,
// as well as how many they are
for (let index = 0; index < wrapper.children.length; index++) {
  const element = wrapper.children[index];

  console.log(element.children, element.children.length);
}

// 2.
// a function to return an object
// that contains the element with the highest number of classes and
// the total number of classes
const getElementWithMostClasses = (list) => {
  let el = null;
  let maxLength = 0;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];

    if (element.classList.length > maxLength) {
      maxLength = element.classList.length;
      el = element;
    }
  }

  return {
    element: el,
    numberOfClasses: maxLength,
  };
};

console.log(getElementWithMostClasses(wrapper.children));
