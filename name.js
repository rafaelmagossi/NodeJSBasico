//module.exports = "My name is Rafael"; // da prioridade sempre ao modulo

/* // fica inacessivel caso tenha modulo no arquivo

exports.name = function () {
     console.log('My name is Rafael (exports)');  
 }

*/

module.exports.name = function(){
    console.log('My name is Rafael');
} 


/*
funcao a e b acessiveis via obj require

module.exports = {
    a: function(){

    },
    b: function(){

    }
}
*/
