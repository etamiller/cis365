document.addEventListener("DOMContentLoaded", function() {

   const colorSchemeAPI = "https://www.randyconnolly.com/funwebdev/3rd/api/colors/sample-colors.php";
   
   const loader = document.querySelector("#loader");
  // main.style.display = "none";
   loader.style.display = "none";

   loadFilters();

   function loadFilters() {
    //  main.style.display = "none";
      loader.style.display = "block";

      fetch(colorSchemeAPI) 
      .then(resp => resp.json())
      .then(scheme => {
         console.log(scheme);

         let stringHtml;
         scheme.forEach(e => {
            // console.log(e.title);
            stringHtml += `<h3>${e.title}</h3>
         <section class="scheme">
             
             <div class="preview">`
            
            e.scheme.forEach(c => {
                 stringHtml += `<div class="color-box" style="background-color:${e.scheme.web}"></div>`;
               })

             `</div>
             <div class="actions">        
                 <button data-id="441">View</button>
             </div>        
         </section> `
         })     

         main.style.display = "block";
         loader1.style.display = "none";

         select.innerHTML = "";
         select.appendChild(createOption("Select a country", ""));
         countries.forEach(c => {
            select.appendChild(createOption(c.name, c.iso));
         });
         select.addEventListener('input', loadPhotos);
      })

            // select.innerHTML = "";
            // select.appendChild(createOption("Select a country", ""));
            // countries.forEach(c => {
            //    select.appendChild(createOption(c.name, c.iso));
            // });
            // select.addEventListener('input', loadPhotos);
   };
   

});
