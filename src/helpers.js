// helpers codigo que puedes reutilizar , funciones para no tener mucho codigo en el archivo control persupuesto

export const  revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if((presupuesto / 4 ) > restante){
        // es decir que ya estamos como en el 25% (rojo)
        clase = 'alert alert-danger';
    }else if( (presupuesto / 2) > restante){ //es decir que ya hemos gastado el 50%
        clase = 'alert alert-warning';
    }else{//si no gastamos niuno es success (verde)
        clase = 'alert alert-success';
    }
    return clase; 
}
// 100 /4 = 25