(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class ProductServices {
        private HttpAdapter: Object = {};
        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {
        private masterEmail: string = 'ivan@gmail.com'

        sendEmail( emailList: string[], template: "to-clients" | "to-admins" ) {
            console.log('Enviando correo a los clientes', emailList, template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private productServices: ProductServices;
        private mailer: Mailer;

        constructor(
            productServices: ProductServices,
            mailer: Mailer
        ){
            this.productServices = productServices;
            this.mailer = mailer;
        }

        loadProduct( id: number ) {
            this.productServices.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productServices.saveProduct( product );
        }
    
        notifyCLients() {
            this.mailer.sendEmail( ['moises@gmail.com'], 'to-admins' );
        }
    
    }
    
    class CartBloc {
        private itemsInCart: Object[] = [];
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    const productServices = new ProductServices();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productServices, mailer);
    
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyCLients();
    cartBloc.onAddToCart(10);








})();