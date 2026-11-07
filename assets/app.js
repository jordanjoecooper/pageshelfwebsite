const menuButton = document.querySelector('[data-menu-button]');
const navigation = document.querySelector('[data-nav]');
const header = document.querySelector('[data-header]');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('open', !isOpen);
    menuButton.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('open');
      menuButton.querySelector('.sr-only').textContent = 'Open navigation';
    });
  });
}

const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 8);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
