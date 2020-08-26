/**
 * @file mofron-event-key/index.js
 * @brief key event for mofron
 * ## event function parameter
 *  - component: event target component object
 *  - string: event target key
 *  - mixed: user specified parameter
 * @feature it is possible to implement key-event to target component by setting type that is "keydown", "keypress" or "keyup" (default type is "keydown")
 *          it is possible to filter the target event key by setting the 'key' method.
 *          the target key is all if user not set 'key' method.
 * @attention set event to mofron.window or mofron.document if you apply key-event to the whole page.
 * @license MIT
 */
const evCom = require('mofron-event-common');

module.exports = class extends evCom {
    /**
     * initialize event
     * 
     * @param (mixed) listener parameter
     *                key-value: event config
     * @param (string) key parameter
     * @short listener,key
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.modname("Key");
	    this.shortForm("listener", "key");
            
	    /* init config */
	    this.confmng().add("type", { type: "string", select: ["keydown", "keypress", "keyup"], init: "keydown" });
	    this.confmng().add("key", { type: "string" });
            
            /* set config */
	    if (0 < arguments.length) {
                this.config(p1, p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * event listener function setter/getter
     * 
     * @param (function) event function
     * @param (mixed) event parameter
     * @return (array) event object ([0]:function, [1]:parameter)
     * @type parameter
     */
    listener (fnc, prm) {
        try {
	    if (undefined === fnc) {
                /* getter */
		return this.confmng("listener");
	    }
	    /* setter */
	    let evt_obj = this;
            let set_fnc = (p1,p2,p3) => {
                try {
		    if ((evt_obj.key() === p2.key) || (null === evt_obj.key())) {
		        if ("function" === typeof p3[0]) {
                            p3[0](evt_obj.component(), p2.key, p3[1]);
			}
		    }
		} catch (e) {
		     console.error(e.stack);
		     throw e;
		}
	    }
	    return this.confmng("listener", set_fnc, [fnc,prm]);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }

    /**
     * event target key
     * 
     * @param (string) event target key
     * @return (string) event target key
     * @type parameter
     */
    key (prm) {
        try {
            return this.confmng("key", prm);
        } catch (e) {
            console.error("invalid parameter");
            throw e;
        }
    }
}
/* end of file */
