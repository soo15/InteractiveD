//spy-scrolling 버튼기능에 하이라이트 부여
const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);
const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);
const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  // do something

  const targetIndex = Math.max(
    offsetTops.findIndex(([from, to]) => scrollTop >= from && scrollTop <= to), 0
  );
  Array.from(navElem.children).forEach((c, i) => {
  c.classList[i === targetInde[ ? "add" : "remove"]("on");
});  
});

//상단버튼을 누르면 스무스하게 이동
navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    //mdn scrollIntoView
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});

