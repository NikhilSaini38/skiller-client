import Styles from "./{{lowerDotCase name}}.styles.js";
import Functions from "./{{lowerDotCase name}}.functions.js";
import Component from "./{{lowerDotCase name}}.component.js";

//@index(F: \.js$,F: !\.styles.js, F: !\.component.js, F: !\.functions.js): import ${variable:pascal} from ${relpath};
///index

export {
    Styles,
    Functions,
    //@index(F: \.js$,F: !\.styles.js, F: !\.component.js, F: !\.functions.js): ${variable:pascal},
    ///index
};

export default Component;