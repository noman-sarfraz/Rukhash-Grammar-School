export const checkAllCheckboxes = (id, total, inc) => {
  for (let i = 1; i <= total; i++) {
    document.getElementById(`${id}-${i}`).checked = true;
  }
};
export const uncheckAllCheckboxes = (id, total, inc) => {
  for (let i = 1; i <= total; i++) {
    document.getElementById(`${id}-${i}`).checked = false;
  }
};

