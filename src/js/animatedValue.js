export function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = +Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
window.addEventListener("scroll", function Anim () {
  let items = document.querySelectorAll(".item-advantages__num");
  let advantages_items = document.querySelector(".advantages__items");
  let advantages_itemsHeight = advantages_items.offsetHeight;
  let advantages_itemsOffset = offset(advantages_items).top;
  const animStart = 4;
  let animItemPoint = window.innerHeight - advantages_itemsHeight / animStart;
  if (advantages_itemsHeight > window.innerHeight) {
    animItemPoint = window.innerHeight - window.innerHeight / animStart;
  }
  if (
    pageYOffset > advantages_itemsOffset - animItemPoint &&
    pageYOffset < advantages_itemsOffset + advantages_itemsHeight
  ) {
    advantages_items.classList.add("_active");
  } else {
    advantages_items.classList.remove("_active");
  }
  if(advantages_items.classList.contains('_active')){
    for (let i = 0; i < items.length; i++) {
      animateValue(items[i], 0, +items[i].innerHTML, 2000);
    }
    window.removeEventListener('scroll', Anim)
  }
});
