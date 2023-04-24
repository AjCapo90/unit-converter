const mockConversionTypes = [
  {
    type: "Length",
    measure: ["Meter", "Feet"],
    conversionRate: 3.281,
    comparisonMeasure: ["Meters", "Feet"],
  },
  {
    type: "Volume",
    measure: ["Liters", "Gallons"],
    conversionRate: 0.264,
    comparisonMeasure: ["Liters", "Gallons"],
  },
  {
    type: "Mass",
    measure: ["Kilograms", "Pounds"],
    conversionRate: 2.204,
    comparisonMeasure: ["Kilos", "Pounds"],
  },
];

const convertBtn = document.getElementById("convert-btn");
const unitInput = document.getElementById("unit-input");
const resultsEl = document.getElementById("results");

convertBtn.addEventListener("click", catchUnitValue);

function catchUnitValue() {
  renderConversions(unitInput.value, mockConversionTypes);
}

function renderConversions(unit, conversionTypes) {
  let totalToAppend = "";
  conversionTypes.forEach((type) => {
    const title = `${type.type} (${type.measure[0]}/${type.measure[1]})`;
    const directConversion = (unit * type.conversionRate).toFixed(3);
    const inverseConversion = (unit / type.conversionRate).toFixed(3);
    const converter = `${unit} ${type.comparisonMeasure[0]} = ${directConversion} ${type.comparisonMeasure[1]} | 
    ${unit} ${type.comparisonMeasure[1]} = ${inverseConversion} ${type.comparisonMeasure[0]}`;
    const converterElClassName = "result";
    totalToAppend += `<div class="${converterElClassName}"><h2>${title}</h2><p>${converter}</p></div>`;
  });
  resultsEl.innerHTML = totalToAppend;
}
