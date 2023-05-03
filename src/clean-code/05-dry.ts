
type Size = '' | 'L' | 'M' | 'S'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){}

    isProductReady(): boolean {
        // No Dry
        // if ( this.name.length <= 0 ) throw Error("Name is empty");
        // if ( this.price <= 0 ) throw Error("Price is zero");
        // if ( this.size.length <= 0 ) throw Error("Size is empty");
        
        for (const key in this) {
            switch ( typeof this[key] ) {
                case 'string':
                    if ( (this[key] as string).length <= 0 ) throw Error(`${ this[key] } is empty`);
                    break;
                case 'number':
                    if ( (this[key] as number) <= 0 ) throw Error(`${ this[key] } is empty`);
                    break;
                default:
                    break;
            }
        }
        
        return true;
    }

    toString(){
        if ( !this.isProductReady ) return;
        return `${ this.name } (${ this.price }), ${ this.size }`
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants', 10, 'L');
    console.log(bluePants.toString());
    
})();
