const timer = () => {
    //const dataAtual = new Date()
    const interval = setInterval(function(){
        const dataAtual = new Date();
        console.log(dataAtual.toLocaleTimeString());
    },2000);

    setTimeout(() => {
        clearInterval(interval);
    }, 10000);
};

timer();