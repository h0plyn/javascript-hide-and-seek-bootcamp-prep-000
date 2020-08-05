function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let j = 0; j < lis.length; j++) {
    lis[j].innerHTML = parseFloat(lis[j].innerHTML) + n;
  }
}

function deepestChild() {
  let parent = document.querySelector('div#grand-node').querySelectorAll('div')
  
  for (let i = 0; i < parent.length; i++) {
  if (i === (parent.length - 1)) {
    return parent[i]
    }
  }
}