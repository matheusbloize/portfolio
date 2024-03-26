const handleLink = (
  e: React.MouseEvent<HTMLElement>,
  area: "header" | "footer",
) => {
  const target = e.target as HTMLElement;
  const titleList = document.querySelectorAll(
    "h2",
  ) as NodeListOf<HTMLHeadingElement>;
  const buttonList = document
    .querySelectorAll(`${area} nav`)[0]
    .querySelectorAll("button") as NodeListOf<HTMLButtonElement>;
  if (target.tagName === "BUTTON") {
    const button = target as HTMLButtonElement;
    if (button.innerText.toLowerCase() === "home") {
      scrollTo(0, 0);
    } else {
      for (let i = 0; i < buttonList.length; i++) {
        if (
          buttonList[i].innerText.toLowerCase() ===
          button.innerText.toLowerCase()
        ) {
          const scrollLocal =
            scrollY +
            titleList[
              `${area === "header" ? i : i - 1}`
            ].getBoundingClientRect().top;
          scrollTo(0, scrollLocal);
        }
      }
    }
  }
};

export default handleLink;
