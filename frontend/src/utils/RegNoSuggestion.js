export default function RegNoSuggestion(lastRegNo) {
  let year = lastRegNo.slice(9, 11);
  let nmbr = lastRegNo.slice(4, 8);
  let currYear = new Date().getFullYear().toString().slice(2, 4);

  if (currYear === year) {
    nmbr = parseInt(nmbr) + 1;
  } else {
    nmbr = "1001";
    year = currYear;
  }
  return `RGS-${nmbr}-${year}`;
}
export function RegNoSuggestionWithIncrement(lastRegNo, increment) {
  let year = lastRegNo.slice(9, 11);
  let nmbr = lastRegNo.slice(4, 8);
  let currYear = new Date().getFullYear().toString().slice(2, 4);

  if( currYear === year) {
    nmbr = parseInt(nmbr) + increment;
  } else {
    nmbr = '1001';
    year = currYear;
  }
  return `RGS-${nmbr}-${year}`
} 

