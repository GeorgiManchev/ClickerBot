document.addEventListener(`DOMContentLoaded`, function(event) {
 const domain = `https://w2.brreg.no/eHandelPortal/ecomsys/`;
 const text = $(`#pagecontent>h3`).text();
 
if (text === `Takk for din bestilling!`) {
 console.log(`links created successfully`);
 
 let current = JSON.parse(localStorage.getItem(`current`));
 const entry = current.shift();
 localStorage.setItem(`current`, JSON.stringify(current));

 return window.location.assign(`${domain}velg.jsp?enhetsnr=${entry}&action=getList`);
} else alert(`Something went wrong!`);
});