const habitNav = async (event) => {
    event.preventDefault();

const response = await fetch("/habit", {
    method: "GET",
});
};

document
    .querySelector('#E_W')
    .addEventListener('click', habitNav);

    
document
    .querySelector('#I_W')
    .addEventListener('click', habitNav);

    
document
    .querySelector('#P_W_N')
    .addEventListener('click', habitNav);