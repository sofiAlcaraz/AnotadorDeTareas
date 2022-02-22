
const getRandom = (min, max) => {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
};

export {getRandom};//default para cuando devuelvo una cosa tipo "Tabla"