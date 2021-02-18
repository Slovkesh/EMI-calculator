const principle_input = document.getElementById("principle");
const rinput = document.getElementById("roi");
const tinput = document.getElementById("tenure");
const principle_slider = document.getElementById("principle-slider");
const roi_slider = document.getElementById("roi-slider");
const tenure_slider = document.getElementById("tenure-slider");
const emi = document.getElementById("emi");
const interest = document.getElementById("interest");
const total = document.getElementById("total-payable");

const updateSlider = () => {
    let p = parseFloat(principle_input.value);
    let r = parseFloat(rinput.value);
    let t = parseFloat(tinput.value);
    principle_slider.value = p
    roi_slider.value = r
    tenure_slider.value = t
    updatepie();
}

const updateValue = () => {
    let p_slider = parseFloat(principle_slider.value);
    let r_slider = parseFloat(roi_slider.value);
    let t_slider = parseFloat(tenure_slider.value);
    principle_input.value = p_slider
    rinput.value = r_slider
    tinput.value = t_slider
    updatepie();
}

const updatepie = () => {
    let p = parseFloat(principle_input.value);
    let r = parseFloat(rinput.value) / 12 / 100;
    let t = parseFloat(tinput.value);
    const emiprice = parseFloat(p) * r * (((1 + r) ** t) / (((1 + r) ** t) - 1));
    const interestprice = Math.round((emiprice * t) - p);
    const totalprice = interestprice + parseFloat(p)
    console.log(p, r)
    console.log()
    interest.innerHTML = interestprice
    total.innerHTML = totalprice
    emi.innerHTML = Math.floor(emiprice)



    var ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        data: {
            datasets: [
                {
                    fill: true,
                    backgroundColor: [
                        '#ff3333',
                        '#79ff4d'],
                    data: [((principle_input.value / totalprice) * 100).toFixed(2), ((interestprice / totalprice) * 100).toFixed(2)],
                    borderWidth: [3, 3]
                }
            ],
            labels: [
                'Principle',
                'interest'
            ]
        }
    });
}
// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//     type: 'doughnut',

//     data: {
//         datasets: [
//             {
//                 fill: true,
//                 backgroundColor: [
//                     '#ff3333',
//                     '#79ff4d'],
//                 data: [((100000 / 105500) * 100).toFixed(2), ((5500 / 105500) * 100).toFixed(2)],
//                 borderWidth: [3, 3]
//             }
//         ],

//         labels: [
//             'Principle',
//             'interest',
//         ]
//     },
//     options: {}
// });
