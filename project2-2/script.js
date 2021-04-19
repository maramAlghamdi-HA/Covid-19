fetch("https://covid-api.mmediagroup.fr/v1/cases")
    .then(res => res.json())
    .then(data => {

        const saudiArray = data['Saudi Arabia'].All


        document.querySelector("#country").innerHTML = saudiArray.country;
        document.querySelector("#population").innerHTML = saudiArray.population;
        document.querySelector("#confirmed").innerHTML = saudiArray.confirmed;
        document.querySelector("#Recovered").innerHTML = saudiArray.recovered;
        document.querySelector("#Deaths").innerHTML = saudiArray.deaths;





    })




fetch("https://datasource.kapsarc.org/api/records/1.0/search/?dataset=saudi-arabia-coronavirus-disease-covid-19-situation&q=&facet=daily_cumulative&facet=indicator&facet=date&facet=event&facet=city_en&facet=region_en")
    .then(res => res.json())
    .then(data => {
        const cityArray = data.records;


        cityArray.forEach(element => {
            document.querySelector(".fieldName").innerHTML = element.fields.indicator
            const city = ` <tr class="rowContant">
                                        <td id="city">${element.fields.city_en}</td>
                                        <td id="region">${element.fields.region_en}</td>
                                         <td id="caseNum">${element.fields.case_value}</td>
            </tr>`
            document.querySelector("#cityTable").innerHTML += city
        });



    })



let template = `<iframe  width="560" height="400"  class="col-md-12 "
    src="https://www.youtube.com/embed/4U0DBfwTDak?autoplay=1&mute=1" 
   ></iframe>`;
$("#videos").append(template);
