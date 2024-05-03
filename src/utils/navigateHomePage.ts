export const navigateHomePage = (id: string) => {
  const element = document.querySelector(`#${id}`);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
