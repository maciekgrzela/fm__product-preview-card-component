const useCulture = () =>
  window.navigator.languages && window.navigator.languages.length
    ? window.navigator.languages[0]
    : window.navigator.language;

export default useCulture;
