//let year = $(`:checkbox[name=3001]:not(:checked):first`).click();

document.addEventListener(`DOMContentLoaded`, function(event) {
let reg = $(`:checkbox[name=5040]:not(:checked)`).click();
if(reg.length === 0) {
 selectionFinished();
 }
});

const selectionFinished  = () => {
 const domain = `https://w2.brreg.no/eHandelPortal/ecomsys/`;
 
 const navigateNextPageForSelection = entry => {
 return window.location.assign(`${domain}velg.jsp?enhetsnr=${entry}&action=getList`);
 };
 
 const navigateConfirmSelection = () => {
 return window.location.assign(`${domain}bekreft.jsp`);
 };
 
 const createNextSet = () => {
 let allEntries = JSON.parse(localStorage.getItem(`all`));
 if (allEntries.length === 0){
   alert(`Finished big set.`)
 }
 let current = allEntries.splice(0, 50);
 
 localStorage.setItem(`all`, JSON.stringify(allEntries));
 localStorage.setItem(`current`, JSON.stringify(current));
 
 console.log(`SET was created with size: 50 left: ${allEntries.length}`);
 console.log(current);
 return navigateConfirmSelection();
 };

 let current = JSON.parse(localStorage.getItem(`current`));
 if (current.length > 0) {
 let entry = current.shift();
 localStorage.setItem(`current`, JSON.stringify(current));
 return navigateNextPageForSelection(entry);
 }else{
 return createNextSet();
 }
};