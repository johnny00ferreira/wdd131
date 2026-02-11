const tipsContainer = document.getElementById("tipsContainer");

if (tipsContainer) {

    const recyclingTips = [
        {
            material: "Plastic",
            instruction: "Separate plastic bottles and containers and place them in recycling bins."
        },
        {
            material: "Glass",
            instruction: "Rinse glass bottles and separate by color when possible."
        },
        {
            material: "Metal",
            instruction: "Recycle aluminum cans and remove any food residue."
        },
        {
            material: "Organic Waste",
            instruction: "Dispose of food scraps in compost or organic waste bins."
        }
    ];

    recyclingTips.forEach(tip => {
        const div = document.createElement("div");
        div.innerHTML = `
                <h3>${tip.material}</h3>
                <p>${tip.instruction}</p>
            `;
        tipsContainer.appendChild(div);
    });
}
