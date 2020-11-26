type VoidFunction = () => void;

export const clickOutside = (
  el: HTMLElement,
  onClickOutside: VoidFunction,
  withExits = false,
  validator?: (el: HTMLElement, e: MouseEvent) => boolean
): VoidFunction => {
  const cb = (e: MouseEvent) => {
    if (validator) {
      if (validator(el, e)) {
        onClickOutside();
      }
    } else if (
      e.target &&
      e.target !== el &&
      !el.contains(e.target as HTMLElement)
    ) {
      onClickOutside();
    }
  };

  document.addEventListener("click", cb);
  const unregisterExits = withExits
    ? registerExits(onClickOutside)
    : () => false;

  return () => {
    unregisterExits();
    document.removeEventListener("click", cb);
  };
};

const KEYS = {
  ESCAPE: "Escape",
};

export const registerExits = (onEscape: VoidFunction): VoidFunction => {
  const cb = (e: KeyboardEvent) => {
    if ([KEYS.ESCAPE].includes(e.key)) {
      onEscape();
    }
  };

  document.addEventListener("keyup", cb);
  return () => document.removeEventListener("keyup", cb);
};
