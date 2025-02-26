module.exports = {  // eslint-disable-line no-undef
  root: true,  // el root es el directorio raíz del proyecto
  env: {  // el entorno en el que se ejecuta el código
    node: true   // node.js
  },  
  extends: [   // las reglas que se van a seguir
    "plugin:vue/vue3-essential",    // reglas para compatibilidad con Vue 3
    "eslint:recommended"   // reglas recomendadas por eslint
  ],
  parserOptions: {    //Movimos requireConfigFile: false a parserOptions, que es el lugar correcto.
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",  // regla para no usar console.log
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"  // regla para no usar debugger
  }
};
